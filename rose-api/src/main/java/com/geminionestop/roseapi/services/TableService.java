package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.models.Rose;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.internal.waiters.ResponseOrException;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.DescribeTableResponse;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;
import software.amazon.awssdk.services.dynamodb.model.ListTablesRequest;
import software.amazon.awssdk.services.dynamodb.model.ListTablesResponse;
import software.amazon.awssdk.services.dynamodb.waiters.DynamoDbWaiter;

import java.util.List;

@Service
public class TableService {
    private DynamoDbClient dbClient;
    private DynamoDbTable<Rose> roseTable;


    TableService(DynamoDbClient dbClient, DynamoDbTable<Rose> roseTable) {
        this.dbClient = dbClient;
        this.roseTable = roseTable;
    }

    public void listAllTables() {
        boolean moreTables = true;
        String lastName = null;

        while (moreTables) {
            try {
                ListTablesResponse response = null;
                ListTablesRequest request;
                if (lastName == null) {
                    request = ListTablesRequest.builder().build();
                } else {
                    request = ListTablesRequest.builder()
                            .exclusiveStartTableName(lastName).build();
                }
                response = dbClient.listTables(request);

                List<String> tableNames = response.tableNames();
                if (tableNames.size() > 0) {
                    for (String curName : tableNames) {
                        System.out.format("* %s\n", curName);
                    }
                } else {
                    moreTables = false;
                    System.out.println("No tables found!");
                    break;
                }

                lastName = response.lastEvaluatedTableName();
                if (lastName == null) {
                    moreTables = false;
                }

            } catch (DynamoDbException e) {
                System.err.println(e.getMessage());
                System.exit(1);
            }
        }
        System.out.println("\nDone!");
    }

    public void createRoseTable() {
        roseTable.createTable();
    }

    public void deleteRoseTable() {
        roseTable.deleteTable();
    }
}
