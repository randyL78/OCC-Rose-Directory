package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.models.Rose;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

@Service
public class RoseService {
    private DynamoDbTable<Rose> roseTable;

    RoseService(DynamoDbTable<Rose> roseTable) {
        this.roseTable = roseTable;
    }

    public void createRose(RoseDetailDto roseDetails) {
        Rose rose = Rose.builder()
                .name(roseDetails.name())
                .slug(roseDetails.slug())
                .imageUrl(roseDetails.imageUrl())
                .thumbnailUrl(roseDetails.thumbnailUrl())
                .reblooms(roseDetails.reblooms())
                .fragranceIntensity(roseDetails.fragranceIntensity())
                .fragranceDescription(roseDetails.fragranceDescription())
                .description(roseDetails.description())
                .careInstructions(roseDetails.careInstructions())
                .history(roseDetails.history())
                .colorPrimary(roseDetails.colorPrimary())
                .colorSecondary(roseDetails.colorSecondary())
                .build();

        roseTable.putItem(rose);
    }

    public RoseDetailDto getRoseDetails(String slug) {
        Rose rose = roseTable.getItem(Key.builder().partitionValue(slug).build());

        if(rose == null) {
            return null;
        }

        RoseDetailDto roseDetails = RoseDetailDto
                .builder()
                .slug(rose.getSlug())
                .name(rose.getName())
                .imageUrl(rose.getImageUrl())
                .thumbnailUrl(rose.getThumbnailUrl())
                .reblooms(rose.getReblooms())
                .fragranceIntensity(rose.getFragranceIntensity())
                .fragranceDescription(rose.getFragranceDescription())
                .description(rose.getDescription())
                .history(rose.getHistory())
                .careInstructions(rose.getCareInstructions())
                .colorPrimary(rose.getColorPrimary())
                .colorSecondary(rose.getColorSecondary())
                .build();

        return roseDetails;
    }

}
