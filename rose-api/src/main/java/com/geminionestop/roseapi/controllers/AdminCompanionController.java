package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dto.AdminCompanionIndexDto;
import com.geminionestop.roseapi.services.CompanionService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/admin/companions")
public class AdminCompanionController {
    private final CompanionService service;
    private final EnvironmentValues environmentValues;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping
    public ResponseEntity<List<AdminCompanionIndexDto>> getAllRoses() {
        logger.info("Fetching all admin roses");

        List<AdminCompanionIndexDto> companions = service.getAdminCompanions();

        return ResponseEntity.ok(companions);
    }}
