package com.geminionestop.roseapi.utils;

public class Slugify {
    public static String slugify(String text) {
        return text
                .toLowerCase()
                .replaceAll("^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$", "")
                .replaceAll("[^a-zA-Z0-9]+", "-");
    }
}
