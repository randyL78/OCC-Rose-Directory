package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.RoseModel;
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
    public static class Mapper {
        public static RoseDetailDto toDto(RoseModel rose) {
            if (rose == null) {
                return null;
            }

            return RoseDetailDto.builder()
                    .imageUrl(rose.getImageUrl())
                    .thumbnailUrl(rose.getThumbnailUrl())
                    .name(rose.getName())
                    .slug(rose.getSlug())
                    .reblooms(rose.getReblooms())
                    .fragranceIntensity(rose.getFragranceIntensity())
                    .fragranceDescription(rose.getFragranceDescription())
                    .description(rose.getDescription())
                    .careInstructions(rose.getCareInstructions())
                    .history(rose.getHistory())
                    .colorPrimary(rose.getColorPrimary())
                    .colorSecondary(rose.getColorSecondary())
                    .build();
        }

        public static RoseModel toModel(RoseDetailDto roseDetails) {
            if (roseDetails == null) {
                return null;
            }

            return RoseModel.builder()
                    .imageUrl(roseDetails.imageUrl)
                    .thumbnailUrl(roseDetails.thumbnailUrl)
                    .name(roseDetails.name)
                    .slug(roseDetails.slug)
                    .reblooms(roseDetails.reblooms)
                    .fragranceIntensity(roseDetails.fragranceIntensity)
                    .fragranceDescription(roseDetails.fragranceDescription)
                    .description(roseDetails.description)
                    .careInstructions(roseDetails.careInstructions)
                    .history(roseDetails.history)
                    .colorPrimary(roseDetails.colorPrimary)
                    .colorSecondary(roseDetails.colorSecondary)
                    .build();
        }
    }
}