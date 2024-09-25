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
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoseServiceDefaultImpl implements RoseService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final RoseRepository repository;
    private final EnvironmentValues environmentValues;
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
        rose.setQrCodeUrl(generateQrCode(roseDetailDto.getSlug()));

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
        roseDetailDto.setQrCodeUrl(generateQrCode(roseDetailDto.getSlug()));

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

    private String generateQrCode(String slug) {
        logger.info("Generating QR Code for {}", slug);

        String qrCodeText = environmentValues.getClienturl() + "roses/" + slug;

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PutObjectRequest objectRequest;

        try {

            BufferedImage image = createQRCode(qrCodeText);


            ImageIO.write(image, "png", baos);

            objectRequest = PutObjectRequest
                    .builder()
                    .bucket(environmentValues.getS3bucket())
                    .key("qr-" + slug + ".png")
                    .build();
        } catch (IOException ioException) {
            logger.error("Error creating QR Code");
            logger.error(ioException.getMessage());
            return null;
        } catch (WriterException writerException) {
            logger.error("Error formatting QR Code to PNG");
            return null;
        }

        try {
            logger.info("Uploading qr code to S3");
            AsyncRequestBody requestBody = AsyncRequestBody.fromByteBuffer(ByteBuffer.wrap(baos.toByteArray()));

            s3Client.listBuckets().whenComplete(((listBucketsResponse, throwable) -> {
                if (!listBucketsResponse.buckets().isEmpty()) {
                    logger.info("Buckets found, putting object");
                    s3Client.putObject(objectRequest, requestBody);
                } else {
                    logger.error(throwable.getMessage());
                }
            }));

        } catch (Exception e) {
            logger.error("Error uploading qr code to S3");
            logger.error(e.getMessage());
            return null;
        }

        String qrCodeUrl = environmentValues.getImageurl() + "qr-" + slug + ".png";
        logger.info("QR Code Url: {}", qrCodeUrl);

        return qrCodeUrl;
    }

    private static BufferedImage createQRCode(String text) throws WriterException {
        QRCodeWriter codeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = codeWriter.encode(text, BarcodeFormat.QR_CODE, 200, 200);

        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }
}
