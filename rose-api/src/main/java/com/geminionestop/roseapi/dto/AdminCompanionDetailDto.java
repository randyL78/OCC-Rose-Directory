package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.CompanionModel;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AdminCompanionDetailDto {
    private String name;
    private String slug;
    private String imageUrl;
    private String description;
    private String qrCodeUrl;

    public static class Mapper {
        public static AdminCompanionDetailDto toDto(CompanionModel companionModel) {
            return AdminCompanionDetailDto
                    .builder()
                    .name(companionModel.getName())
                    .slug(companionModel.getSlug())
                    .imageUrl(companionModel.getImageUrl())
                    .description(companionModel.getDescription())
                    .qrCodeUrl(companionModel.getQrCodeUrl())
                    .build();
        }

        public static void toModel(AdminCompanionDetailDto dto, CompanionModel model) {
            model.setName(dto.getName());
            model.setSlug(dto.getSlug());
            model.setImageUrl(dto.getImageUrl());
            model.setDescription(dto.getDescription());
            model.setQrCodeUrl(dto.getQrCodeUrl());
        }
    }
}