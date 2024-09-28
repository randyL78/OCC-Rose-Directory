package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.CompanionModel;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CompanionIndexDto {
    private final String name;
    private final String slug;
    private final String imageUrl;

    public static class Mapper {
        public static CompanionIndexDto toDto(CompanionModel companionModel) {
            return CompanionIndexDto
                    .builder()
                    .name(companionModel.getName())
                    .slug(companionModel.getSlug())
                    .imageUrl(companionModel.getImageUrl())
                    .build();
        }
    }
}
