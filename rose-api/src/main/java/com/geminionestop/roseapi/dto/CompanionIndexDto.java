package com.geminionestop.roseapi.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CompanionIndexDto {
    private final String name;
    private final String slug;
    private final String imageUrl;
}
