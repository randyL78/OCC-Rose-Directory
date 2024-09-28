package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.services.QRCodeCreator;
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

@Service
@RequiredArgsConstructor
public class QRCodeCreatorDefaultImpl implements QRCodeCreator {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final EnvironmentValues environmentValues;
    private final S3AsyncClient s3Client;

    @Override
    public String createAndUploadQRCode(String slug, String path) {
        logger.info("Generating QR Code for {}", slug);

        String qrCodeText = environmentValues.getClienturl() + path + "/" + slug;

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

        logger.info("Uploading qr code to S3");
        AsyncRequestBody requestBody = AsyncRequestBody.fromByteBuffer(ByteBuffer.wrap(baos.toByteArray()));

        s3Client.putObject(objectRequest, requestBody).whenComplete((putObjectResponse, throwable) -> {
            if (throwable != null) {
                RuntimeException cause = (RuntimeException) throwable.getCause();
                logger.error("Error uploading qr code to S3");
                logger.error(cause.getMessage());

                throw cause;
            }

            logger.info("Successfully uploaded qr code to S3");
        });

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
