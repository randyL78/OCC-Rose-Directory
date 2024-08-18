package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
public class RoseControllerTest {
    @InjectMocks
    private RoseController controller;

    @Mock
    private RoseService roseService;

    @Test
    void getRoseDetailsShouldReturnOkStatus() {
        RoseDetailDto roseDetail = getRoseDetail();
        when(roseService.getRoseDetails(roseDetail.slug())).thenReturn(roseDetail);

        ResponseEntity<RoseDetailDto> response = controller.getRoseDetails("test-slug");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void getRoseDetailsShouldReturnNotFoundStatusWhenRoseIsNotFound() {
        when(roseService.getRoseDetails("nonexistent-rose")).thenReturn(null);

        ResponseEntity<RoseDetailDto> response = controller.getRoseDetails("nonexistent-rose");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    void getRoseDetailsShouldReturnRoseDetailDto() {
        RoseDetailDto roseDetail = getRoseDetail();

        when(roseService.getRoseDetails(roseDetail.slug())).thenReturn(roseDetail);

        RoseDetailDto responseRoseDetail = controller.getRoseDetails(roseDetail.slug()).getBody();

        assertThat(responseRoseDetail)
                .isNotNull()
                .hasFieldOrPropertyWithValue("slug", roseDetail.slug())
                .hasFieldOrPropertyWithValue("name", roseDetail.name())
                .hasFieldOrPropertyWithValue("reblooms", roseDetail.reblooms())
                .hasFieldOrPropertyWithValue("description", roseDetail.description())
                .hasFieldOrPropertyWithValue("history", roseDetail.history())
                .hasFieldOrPropertyWithValue("careInstructions", roseDetail.careInstructions())
                .hasFieldOrPropertyWithValue("colorPrimary", roseDetail.colorPrimary())
                .hasFieldOrPropertyWithValue("fragranceIntensity", roseDetail.fragranceIntensity());
    }

    private RoseDetailDto getRoseDetail() {
        return RoseDetailDto
                .builder()
                .name("Test Rose")
                .slug("test-slug")
                .reblooms("Yep")
                .description("Test description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();
    }
}
