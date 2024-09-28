package com.geminionestop.roseapi.dto;

import com.geminionestop.roseapi.models.CompanionModel;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AdminCompanionIndexDto {
    private String name;
    private Long id;
    private String slug;
    private String qrCodeUrl;

    public static class Mapper {
        public static AdminCompanionIndexDto toDto(CompanionModel model) {
            return AdminCompanionIndexDto
                    .builder()
                    .name(model.getName())
                    .id(model.getId())
                    .slug(model.getSlug())
                    .qrCodeUrl(model.getQrCodeUrl())
                    .build();
        }
    }
}
