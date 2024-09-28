package com.geminionestop.roseapi.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CompanionDetailDto {
    private final String name;
    private final String slug;
    private final String imageUrl;
    private final String description;
}