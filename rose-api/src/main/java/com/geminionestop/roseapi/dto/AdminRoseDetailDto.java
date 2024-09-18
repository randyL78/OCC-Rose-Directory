package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.RoseModel;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AdminRoseDetailDto {
    private Long id;
    private String slug;
    private String name;
    private String imageUrl;
    private String thumbnailUrl;
    private String qrCodeUrl;
    private String reblooms;
    private String colorPrimary;
    private String colorSecondary;
    private String description;
    private String history;
    private String careInstructions;
    private Integer fragranceIntensity;
    private String fragranceDescription;

    public static class Mapper {
        public static AdminRoseDetailDto toDto(RoseModel roseModel) {
            return AdminRoseDetailDto
                    .builder()
                    .id(roseModel.getId())
                    .slug(roseModel.getSlug())
                    .name(roseModel.getName())
                    .imageUrl(roseModel.getImageUrl())
                    .thumbnailUrl(roseModel.getThumbnailUrl())
                    .qrCodeUrl(roseModel.getQrCodeUrl())
                    .reblooms(roseModel.getReblooms())
                    .colorPrimary(roseModel.getColorPrimary())
                    .colorSecondary(roseModel.getColorSecondary())
                    .description(roseModel.getDescription())
                    .history(roseModel.getHistory())
                    .careInstructions(roseModel.getCareInstructions())
                    .fragranceIntensity(roseModel.getFragranceIntensity())
                    .fragranceDescription(roseModel.getFragranceDescription())
                    .build();
        }

        public static RoseModel toModel(AdminRoseDetailDto roseDetailDto) {
            return RoseModel
                    .builder()
                    .id(roseDetailDto.getId())
                    .slug(roseDetailDto.getSlug())
                    .name(roseDetailDto.getName())
                    .imageUrl(roseDetailDto.getImageUrl())
                    .thumbnailUrl(roseDetailDto.getThumbnailUrl())
                    .qrCodeUrl(roseDetailDto.getQrCodeUrl())
                    .reblooms(roseDetailDto.getReblooms())
                    .colorPrimary(roseDetailDto.getColorPrimary())
                    .colorSecondary(roseDetailDto.getColorSecondary())
                    .description(roseDetailDto.getDescription())
                    .history(roseDetailDto.getHistory())
                    .careInstructions(roseDetailDto.getCareInstructions())
                    .fragranceIntensity(roseDetailDto.getFragranceIntensity())
                    .fragranceDescription(roseDetailDto.getFragranceDescription())
                    .build();
        }

        public static RoseModel toModel(AdminRoseDetailDto roseDetailDto, RoseModel roseModel) {
            roseModel.setSlug(roseDetailDto.getSlug());
            roseModel.setName(roseDetailDto.getName());
            roseModel.setImageUrl(roseDetailDto.getImageUrl());
            roseModel.setThumbnailUrl(roseDetailDto.getThumbnailUrl());
            roseModel.setQrCodeUrl(roseDetailDto.getQrCodeUrl());
            roseModel.setReblooms(roseDetailDto.getReblooms());
            roseModel.setColorPrimary(roseDetailDto.getColorPrimary());
            roseModel.setColorSecondary(roseDetailDto.getColorSecondary());
            roseModel.setDescription(roseDetailDto.getDescription());
            roseModel.setHistory(roseDetailDto.getHistory());
            roseModel.setCareInstructions(roseDetailDto.getCareInstructions());
            roseModel.setFragranceIntensity(roseDetailDto.getFragranceIntensity());
            roseModel.setFragranceDescription(roseDetailDto.getFragranceDescription());

            return roseModel;
        }
    }
}
