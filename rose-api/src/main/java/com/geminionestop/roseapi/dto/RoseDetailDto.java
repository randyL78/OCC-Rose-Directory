package com.geminionestop.roseapi.dto;

import lombok.Builder;

@Builder
public record RoseDetailDto(
        long id,
        String imageUrl,
        String name,
        String slug,
        String reblooms,
        int fragranceIntensity,
        String fragranceDescription,
        String description,
        String careInstructions,
        String history,
        String colorPrimary,
        String colorSecondary
) {
}
