package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.RoseModel;
import lombok.Builder;

@Builder
public record RoseIndexItemDto(
        String name,
        String slug,
        String imageUrl
) {
    public static class Mapper {
        public static RoseIndexItemDto toDto(RoseModel roseModel) {
            return RoseIndexItemDto
                    .builder()
                    .name(roseModel.getName())
                    .slug(roseModel.getSlug())
                    .imageUrl(roseModel.getImageUrl())
                    .build();
        }
    }
}
