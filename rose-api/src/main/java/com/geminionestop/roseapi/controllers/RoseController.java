package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import com.geminionestop.roseapi.services.TableService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;


@RestController
@RequestMapping("/v1/roses")
public class RoseController {
    private RoseService roseService;

    RoseController(RoseService roseService, TableService tableService) {
        this.roseService = roseService;
    }

    @GetMapping("/{slug}")
    public ResponseEntity<RoseDetailDto> getRoseDetails(@PathVariable String slug) {
        RoseDetailDto roseDetail = roseService.getRoseDetails(slug);

        if(roseDetail == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(roseDetail);
    }

    @PostMapping()
    public ResponseEntity<?> createRose(@RequestBody RoseDetailDto roseDetails) {
        System.out.println("Creating new rose");
        roseService.createRose(roseDetails);

        return ResponseEntity.created(
                URI.create("https://api-rosedirectory/v1/roses/" + roseDetails.slug()))
                   .body(roseDetails);
    }

}