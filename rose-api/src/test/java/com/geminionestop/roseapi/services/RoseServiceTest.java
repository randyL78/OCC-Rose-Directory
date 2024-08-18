package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.models.Rose;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RoseServiceTest {
    @InjectMocks
    private RoseService roseService;

    @Mock
    private DynamoDbTable<Rose> roseTable;

    @Test
    void createRoseCreatesARoseThroughDBApi() {
        RoseDetailDto roseDetailDto = getRoseDetail();

        roseService.createRose(roseDetailDto);

        verify(roseTable, times(1)).putItem(getRoseModel());
    }

    @Test
    void getRoseDetailsReturnsNullWhenRoseNotFound() {
        String slug = "non-existent-rose";
        Key key = Key.builder().partitionValue(slug).build();
        when(roseTable.getItem(key)).thenReturn(null);

        RoseDetailDto roseDetail = roseService.getRoseDetails(slug);

        assertNull(roseDetail);
    }

    @Test
    void getRoseDetailsReturnsTheRose() {
        RoseDetailDto roseDetail = getRoseDetail();
        Key key = Key.builder().partitionValue(roseDetail.slug()).build();
        when(roseTable.getItem(key)).thenReturn(getRoseModel());

        RoseDetailDto returnedRoseDetail = roseService.getRoseDetails(roseDetail.slug());

        assertThat(returnedRoseDetail)
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

    private Rose getRoseModel() {
        return Rose.builder()
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
