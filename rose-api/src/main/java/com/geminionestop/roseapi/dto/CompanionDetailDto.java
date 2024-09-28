package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.CompanionModel;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CompanionDetailDto {
    private String name;
    private String slug;
    private String imageUrl;
    private String description;

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

        public static CompanionModel toModel(CompanionDetailDto dto) {
            return CompanionModel
                    .builder()
                    .name(dto.getName())
                    .slug(dto.getSlug())
                    .imageUrl(dto.getImageUrl())
                    .description(dto.getDescription())
                    .build();
        }
    }
}