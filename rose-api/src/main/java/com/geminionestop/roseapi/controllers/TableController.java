package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.services.TableService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/v1/tables")
public class TableController {
    private TableService tableService;

    TableController(TableService tableService) {
        this.tableService = tableService;
    }

    @PostMapping()
    public ResponseEntity<?> createTableInDynamo() {
        System.out.println("Creating a new table");

        tableService.createRoseTable();

        return ResponseEntity.created(URI.create("")).body("Created Tables");
    }

    @GetMapping()
    public ResponseEntity<?> getDynamoTest() {
        System.out.println("Listing your Amazon DynamoDB tables:\n");

        tableService.listAllTables();

        return ResponseEntity.ok("Listing tables");
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteTable() {
        tableService.deleteRoseTable();

        return ResponseEntity.noContent().build();
    }
}
