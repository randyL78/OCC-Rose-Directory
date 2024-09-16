package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.RoseModel;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AdminRoseIndexDto {
    private String name;
    private Long id;
    private String slug;
    private String qrCodeUrl;

    public static class Mapper {
        public static AdminRoseIndexDto toDto(RoseModel model) {
            return AdminRoseIndexDto
                    .builder()
                    .name(model.getName())
                    .id(model.getId())
                    .slug(model.getSlug())
                    .qrCodeUrl(model.getQrCodeUrl())
                    .build();
        }
    }
}