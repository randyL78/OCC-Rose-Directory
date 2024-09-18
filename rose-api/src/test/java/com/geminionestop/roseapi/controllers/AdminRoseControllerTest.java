package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
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
public class AdminRoseControllerTest {
    @InjectMocks
    private AdminRoseController controller;

    @Mock
    private RoseService service;

    @Mock
    private EnvironmentValues environmentValues;

    @Test
    void createRose_shouldReturnCreatedResponse() {
        AdminRoseDetailDto roseDetail = getRoseDetailDto();
        when(service.createRose(roseDetail)).thenReturn(roseDetail);

        ResponseEntity<?> response = controller.createRose(roseDetail);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    void createRose_ReturnsTheUriToTheRoseDetails() {
        when(environmentValues.getUrl()).thenReturn("http://localhost:8080/");
        AdminRoseDetailDto roseDetail = getRoseDetailDto();
        when(service.createRose(roseDetail)).thenReturn(roseDetail);

        ResponseEntity<?> response = controller.createRose(roseDetail);

        assertThat(Objects.requireNonNull(response.getHeaders().getLocation()).toString()).isEqualTo("http://localhost:8080/v1/roses/test-rose");
    }

    @Test
    void updateRose_shouldReturnOkStatus() {
        when(service.updateRose("original-slug", getRoseDetailDto())).thenReturn(getRoseDetailDto());

        ResponseEntity<?> response = controller.updateRose("original-slug", getRoseDetailDto());

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    private AdminRoseDetailDto getRoseDetailDto() {
        return AdminRoseDetailDto
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
