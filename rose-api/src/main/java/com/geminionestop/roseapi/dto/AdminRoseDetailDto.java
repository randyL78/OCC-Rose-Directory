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
    }
}
