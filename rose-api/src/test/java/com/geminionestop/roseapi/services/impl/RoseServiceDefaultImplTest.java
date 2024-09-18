package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;
import com.geminionestop.roseapi.exceptions.ResourceNotFoundException;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
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
        roseService.createRose(getAdminRoseDetailDto());

        verify(roseRepository).save(getRoseModel());
    }

    @Test
    void createRose_slugifiesName() {
        AdminRoseDetailDto roseDetailDto = AdminRoseDetailDto
                .builder()
                .name("A Test Rose")
                .build();

        RoseModel roseModel = RoseModel
                .builder()
                .name("A Test Rose")
                .slug("a-test-rose")
                .build();

        roseService.createRose(roseDetailDto);

        verify(roseRepository).save(roseModel);
    }

    @Test
    void createRose_overwritesExistingSlug() {
        AdminRoseDetailDto roseDetailDto = AdminRoseDetailDto
                .builder()
                .name("A Test Rose")
                .slug("wrong-slug")
                .build();

        RoseModel roseModel = RoseModel
                .builder()
                .name("A Test Rose")
                .slug("a-test-rose")
                .build();

        roseService.createRose(roseDetailDto);

        verify(roseRepository).save(roseModel);
    }

    @Test
    void createRose_shouldReturnTheDto() {
        AdminRoseDetailDto response = roseService.createRose(getAdminRoseDetailDto());

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

    @Test
    void getAllRoses_shouldReturnAnEmptyList_whenThereAreNoRoses() {
        List<RoseModel> roses = new ArrayList<>();
        when(roseRepository.findAll()).thenReturn(roses);

        List<RoseIndexItemDto> roseDetailList = roseService.getAllRoses();

        assertThat(roseDetailList)
                .isNotNull()
                .isEmpty();
    }

    @Test
    void getAllRoses_shouldReturnRoses() {
        List<RoseModel> roses = new ArrayList<>();
        roses.add(getRoseModel());
        when(roseRepository.findAll()).thenReturn(roses);

        List<RoseIndexItemDto> roseDetailList = roseService.getAllRoses();

        assertThat(roseDetailList)
                .isNotNull()
                .isNotEmpty()
                .hasSize(1);
    }

    @Test
    void updateRose_shouldSaveRose() {
        AdminRoseDetailDto roseDetailDto = getAdminRoseDetailDto();
        String slug = roseDetailDto.getSlug();

        when(roseRepository.findBySlug(slug)).thenReturn(getRoseModel());

        roseService.updateRose(slug, roseDetailDto);

        verify(roseRepository).save(getRoseModel());
    }

    @Test
    void updateRose_shouldUpdateRoseWithNewValues() {
        AdminRoseDetailDto roseDetailDto = AdminRoseDetailDto
                .builder()
                .name("Test Rose")
                .slug("test-rose")
                .reblooms("Yep")
                .description("Updated Description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();

        RoseModel updatedRoseModel = RoseModel.builder()
                .name("Test Rose")
                .slug("test-rose")
                .reblooms("Yep")
                .description("Updated Description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();

        String slug = roseDetailDto.getSlug();

        when(roseRepository.findBySlug(slug)).thenReturn(getRoseModel());

        roseService.updateRose(slug, roseDetailDto);

        verify(roseRepository).save(updatedRoseModel);
    }

    @Test
    void updateRose_shouldUpdateTheSlugWithNewValue() {
        AdminRoseDetailDto roseDetailDto = AdminRoseDetailDto
                .builder()
                .name("New Slug")
                .slug("new-slug")
                .reblooms("Yep")
                .description("Updated Description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();

        RoseModel updatedRoseModel = RoseModel.builder()
                .name("New Slug")
                .slug("new-slug")
                .reblooms("Yep")
                .description("Updated Description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();

        when(roseRepository.findBySlug("test-rose")).thenReturn(getRoseModel());

        roseService.updateRose("test-rose", roseDetailDto);

        verify(roseRepository).save(updatedRoseModel);
    }

    @Test
    void updateRose_ThrowsExceptionIfOriginalRoseNotFound() {
        when(roseRepository.findBySlug("test-rose")).thenReturn(null);

        assertThrows(ResourceNotFoundException.class, () -> {
            roseService.updateRose("test-rose", getAdminRoseDetailDto());
        });
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

    private AdminRoseDetailDto getAdminRoseDetailDto() {
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
