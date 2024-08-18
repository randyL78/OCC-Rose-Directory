package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.services.TableService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/tables")
public class TableController {
    private TableService tableService;

    TableController(TableService tableService) {
        this.tableService = tableService;
    }

    @PostMapping()
    public String createTableInDynamo() {
        System.out.println("Creating a new table");

        tableService.createRoseTable();

        return "Created Tables";
    }

    @GetMapping()
    public String getDynamoTest() {
        System.out.println("Listing your Amazon DynamoDB tables:\n");

        tableService.listAllTables();

        return "Listing tables";
    }

    @DeleteMapping()
    public String deleteTable() {
        tableService.deleteRoseTable();

        return "Deleted table";
    }
}
