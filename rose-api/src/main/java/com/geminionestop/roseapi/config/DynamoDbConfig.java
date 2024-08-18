package com.geminionestop.roseapi.config;

import com.geminionestop.roseapi.models.Rose;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedClient;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.TableSchema;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

import java.net.URI;

@Configuration
public class DynamoDbConfig {
    @Bean
    TableSchema<Rose> roseModelSchema() {
        return TableSchema.fromBean(Rose.class);
    }
    @Value("${amazon.dynamodb.endpoint}")
    private String dynamodbEndpoint;

    @Bean
    DynamoDbClient dynamoDbClient() {
        return DynamoDbClient
                .builder()
                .region(Region.US_EAST_1)
                .endpointOverride(URI.create(dynamodbEndpoint))
                .build();
    }

    @Bean
    DynamoDbEnhancedClient enhancedClient() {
        return DynamoDbEnhancedClient
                .builder()
                .dynamoDbClient(dynamoDbClient())
                .build();
    }

    @Bean
    DynamoDbTable<Rose> roseTable() {
        return enhancedClient().table("Rose", roseModelSchema());
    }
}
