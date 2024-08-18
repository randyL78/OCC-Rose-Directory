package com.geminionestop.roseapi.dtos;

import lombok.Builder;

@Builder
public record RoseDetailDto(
        String imageUrl,
        String thumbnailUrl,
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
