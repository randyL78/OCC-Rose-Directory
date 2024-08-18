package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.services.TableService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TableControllerTest {
    @InjectMocks
    private TableController controller;

    @Mock
    private TableService service;

    @Test
    void createTableInDynamoReturnsResponseIndicatingTableWasCreated() {
        ResponseEntity<?> response = controller.createTableInDynamo();

        assertThat(response.getBody()).isEqualTo("Created Tables");
    }

    @Test
    void createTableInDynamoReturnsHttpStatusCreated() {
        ResponseEntity<?> response = controller.createTableInDynamo();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    void getDynamoTestReturnsHttpsStatusOk() {
        ResponseEntity<?> response = controller.getDynamoTest();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void deleteTableReturnsHttpsStatusNoContent() {
        ResponseEntity<?> response = controller.deleteTable();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
    }
}