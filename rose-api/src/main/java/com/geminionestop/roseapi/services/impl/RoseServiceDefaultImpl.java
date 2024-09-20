package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;
import com.geminionestop.roseapi.exceptions.ResourceNotFoundException;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.RoseService;
import com.geminionestop.roseapi.utils.Slugify;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.async.AsyncRequestBody;
import software.amazon.awssdk.services.s3.S3AsyncClient;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.transfer.s3.S3TransferManager;
import software.amazon.awssdk.transfer.s3.model.CompletedFileUpload;
import software.amazon.awssdk.transfer.s3.model.FileUpload;
import software.amazon.awssdk.transfer.s3.model.UploadFileRequest;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoseServiceDefaultImpl implements RoseService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final RoseRepository repository;
    private final EnvironmentValues environmentValues;
    private final S3TransferManager transferManager;
    private final S3AsyncClient s3Client;

    @Override
    public RoseDetailDto getRoseDetails(String slug) {
        RoseModel rose = repository.findBySlug(slug);
        if (rose == null) {
            return null;
        }

        return RoseDetailDto.Mapper.toDto(rose);
    }

    @Override
    public AdminRoseDetailDto createRose(AdminRoseDetailDto roseDetailDto) {
        RoseModel rose = AdminRoseDetailDto.Mapper.toModel(roseDetailDto);

        // Override slug that came from request to keep things standardized
        String slug = Slugify.slugify(roseDetailDto.getName());
        rose.setSlug(slug);

        // Calculate QR Code Url
        rose.setQrCodeUrl(environmentValues.getImageurl() + "qr-" + slug + ".png");;

        repository.save(rose);

        return roseDetailDto;
    }

    @Override
    public List<RoseIndexItemDto> getAllRoses() {
        return repository
                .findAll()
                .stream()
                .map(RoseIndexItemDto.Mapper::toDto)
                .sorted(Comparator.comparing(RoseIndexItemDto::slug))
                .toList();
    }

    @Override
    public AdminRoseDetailDto updateRose(String slug, AdminRoseDetailDto roseDetailDto) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }
        roseDetailDto.setSlug(Slugify.slugify(roseDetailDto.getName()));
        try {
            roseDetailDto.setQrCodeUrl(generateQrCode(roseDetailDto.getSlug()));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }

        AdminRoseDetailDto.Mapper.toModel(roseDetailDto, rose);

        repository.save(rose);

        return AdminRoseDetailDto.Mapper.toDto(rose);
    }

    @Override
    public List<AdminRoseIndexDto> getAllAdminRoses() {
        return repository
                .findAll()
                .stream()
                .map(AdminRoseIndexDto.Mapper::toDto)
                .sorted(Comparator.comparing(AdminRoseIndexDto::getSlug))
                .toList();
    }

    @Override
    public String deleteRose(String slug) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        repository.delete(rose);

        return slug;
    }

    @Override
    public AdminRoseDetailDto getAdminRose(String slug) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        return AdminRoseDetailDto.Mapper.toDto(rose);
    }

    private String generateQrCode(String slug) throws IOException, WriterException {
        logger.info("Generating QR Code for {}", slug);

        String qrCodeText = environmentValues.getClienturl() + "roses/" + slug;

        BufferedImage image = createQRCode(qrCodeText);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "png", baos);

        PutObjectRequest objectRequest = PutObjectRequest
                .builder()
                .bucket(environmentValues.getS3bucket())
                .key("qr-" + slug + ".png")
                .build();

        AsyncRequestBody requestBody = AsyncRequestBody.fromByteBuffer(ByteBuffer.wrap(baos.toByteArray()));

        logger.info("Uploading qr code to S3");
        s3Client.putObject(objectRequest, requestBody);

        return environmentValues.getImageurl() + "qr-" + slug + ".png";
    }

    private static BufferedImage createQRCode(String text) throws WriterException {
        QRCodeWriter codeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = codeWriter.encode(text, BarcodeFormat.QR_CODE, 200, 200);

        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }
}
