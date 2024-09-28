package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dto.AdminCompanionIndexDto;
import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.services.CompanionService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/admin/companions")
public class AdminCompanionController {
    private final CompanionService service;
    private final EnvironmentValues environmentValues;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping
    public ResponseEntity<List<AdminCompanionIndexDto>> getAllCompanionPlants() {
        logger.info("Fetching all admin companion plants");

        List<AdminCompanionIndexDto> companions = service.getAdminCompanions();

        return ResponseEntity.ok(companions);
    }


    @PostMapping()
    public ResponseEntity<CompanionDetailDto> createRose(@RequestBody CompanionDetailDto roseDetailDto) {
        logger.info("Creating companion plant {}", roseDetailDto.getName());

        CompanionDetailDto response = service.createCompanion(roseDetailDto);

        return ResponseEntity.created(URI.create(environmentValues.getUrl() + "v1/companions/" + response.getSlug())).build();
    }
}

