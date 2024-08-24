package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RoseServiceDefaultImplTest {
    @InjectMocks
    private RoseServiceDefaultImpl roseService;

    @Mock
    private RoseRepository roseRepository;

    @Test
    void createRose_shouldPersistTheRose() {
        roseService.createRose(getRoseDetailDto());

        verify(roseRepository).save(getRoseModel());
    }

    @Test
    void createRose_shouldReturnTheDto() {
        RoseDetailDto response = roseService.createRose(getRoseDetailDto());

        assertThat(response).isNotNull();
    }

    @Test
    void getRoseDetails_shouldReturnNullWhenRoseIsNotFound() {
        RoseDetailDto roseDetails = roseService.getRoseDetails("non-existent-rose");

        assertThat(roseDetails).isNull();
    }

    @Test
    void getRoseDetails_shouldReturnRoseDetails() {
        RoseModel rose = getRoseModel();
        when(roseRepository.findBySlug("test-rose")).thenReturn(rose);
        RoseDetailDto roseDetails = getRoseDetailDto();

        RoseDetailDto resultDto = roseService.getRoseDetails("test-rose");

        assertThat(resultDto).isNotNull()
            .hasFieldOrPropertyWithValue("slug", roseDetails.slug())
            .hasFieldOrPropertyWithValue("name", roseDetails.name())
            .hasFieldOrPropertyWithValue("reblooms", roseDetails.reblooms())
            .hasFieldOrPropertyWithValue("description", roseDetails.description())
            .hasFieldOrPropertyWithValue("history", roseDetails.history())
            .hasFieldOrPropertyWithValue("careInstructions", roseDetails.careInstructions())
            .hasFieldOrPropertyWithValue("colorPrimary", roseDetails.colorPrimary())
            .hasFieldOrPropertyWithValue("fragranceIntensity", roseDetails.fragranceIntensity());
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

    private RoseModel getRoseModel() {
        return RoseModel.builder()
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
