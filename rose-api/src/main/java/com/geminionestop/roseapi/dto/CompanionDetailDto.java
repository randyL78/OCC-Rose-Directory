package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.CompanionModel;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CompanionDetailDto {
    private final String name;
    private final String slug;
    private final String imageUrl;
    private final String description;

    public static class Mapper {
        public static CompanionDetailDto toDto(CompanionModel companionModel) {
            return CompanionDetailDto
                    .builder()
                    .name(companionModel.getName())
                    .slug(companionModel.getSlug())
                    .imageUrl(companionModel.getImageUrl())
                    .description(companionModel.getDescription())
                    .build();
        }
    }
}