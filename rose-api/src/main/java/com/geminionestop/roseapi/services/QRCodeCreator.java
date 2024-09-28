package com.geminionestop.roseapi.services;

public interface QRCodeCreator {
    String createAndUploadQRCode(String slug, String path);
}
