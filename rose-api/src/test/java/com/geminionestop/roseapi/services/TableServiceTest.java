package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.models.Rose;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class TableServiceTest {
    @InjectMocks
    private TableService service;

    @Mock
    private DynamoDbClient client;

    @Mock
    private DynamoDbTable<Rose> roseTable;

    @Test
    void listAllTables() {

    }

    @Test
    void createRoseTableCreatesTheRoseTable() {
        service.createRoseTable();

        verify(roseTable, times(1)).createTable();
    }

    @Test
    void deleteRoseTableDeletesTheRoseTable() {
        service.deleteRoseTable();

        verify(roseTable, times(1)).deleteTable();
    }
}