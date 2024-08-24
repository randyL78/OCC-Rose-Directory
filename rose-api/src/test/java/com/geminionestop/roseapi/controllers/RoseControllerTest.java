package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
public class RoseControllerTest {
    @InjectMocks
    private RoseController controller;

    @Mock
    private RoseService service;

    @Mock
    private EnvironmentValues environmentValues;

    @Test
    void createRose_ReturnsCreatedResponse() {
        RoseDetailDto roseDetail = getRoseDetailDto();

        ResponseEntity<?> response = controller.createRose(roseDetail);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    void createRose_ReturnsTheUriToTheRoseDetails() {
        when(environmentValues.getUrl()).thenReturn("http://localhost:8080/");
        RoseDetailDto roseDetail = getRoseDetailDto();

        ResponseEntity<?> response = controller.createRose(roseDetail);

        assertThat(Objects.requireNonNull(response.getHeaders().getLocation()).toString()).isEqualTo("http://localhost:8080/v1/roses/test-rose");
    }

    @Test
    void getRoseDetails_shouldReturnOkHttpStatus() {
        when(service.getRoseDetails("test-rose")).thenReturn(getRoseDetailDto());

        ResponseEntity<?> response = controller.getRoseDetails("test-rose");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void getRoseDetails_shouldReturnHttpNotFound_ifTheRoseDoesNotExist() {
        when(service.getRoseDetails("non-existent-rose")).thenReturn(null);

        ResponseEntity<?> response = controller.getRoseDetails("non-existent-rose");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    void getRoseDetails_shouldReturnRoseDetailDto() {
        when(service.getRoseDetails("test-rose")).thenReturn(getRoseDetailDto());

        ResponseEntity<RoseDetailDto> response = controller.getRoseDetails("test-rose");
        RoseDetailDto roseDetail = response.getBody();

        assertThat(roseDetail).isNotNull();
        assertThat(roseDetail.slug()).isEqualTo("test-rose");
    }

    private RoseDetailDto getRoseDetailDto() {
        return RoseDetailDto
                .builder()
                .name("Test Rose")
                .slug("test-rose")
                .reblooms("Yep")
                .description("Test description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();
    }
}
