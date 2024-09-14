package com.geminionestop.roseapi.utils;

public class Slugify {
    public static String slugify(String text) {
        return text
                .toLowerCase()
                .replaceAll("[^\\w\\s]", "")
                .replaceAll("^\\s+|\\s+$", "")
                .replaceAll("\\s+", "-");
    }
}
