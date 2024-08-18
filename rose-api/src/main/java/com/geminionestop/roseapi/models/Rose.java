package com.geminionestop.roseapi.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamoDbBean
public class Rose
{
    private String slug;
    private String name;
    private String imageUrl;
    private String thumbnailUrl;
    private int fragranceIntensity;
    private String fragranceDescription;
    private String reblooms;
    private String description;
    private String careInstructions;
    private String history;
    private String colorPrimary;
    private String colorSecondary;

    @DynamoDbPartitionKey
    public String getSlug() {
        return this.slug;
    }
}
