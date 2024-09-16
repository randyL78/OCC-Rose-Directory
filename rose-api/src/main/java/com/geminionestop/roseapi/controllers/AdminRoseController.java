package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.services.RoseService;
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
@RequestMapping("/v1/admin/roses")
public class AdminRoseController {
    private final RoseService roseService;
    private final Logger logger = LoggerFactory.getLogger(AdminRoseController.class);

    @GetMapping
    public ResponseEntity<List<AdminRoseIndexDto>> getAllRoses() {
        logger.info("Fetching all admin roses");

        List<AdminRoseIndexDto> adminRoseIndexDtos = roseService.getAllAdminRoses();

        return ResponseEntity.ok(adminRoseIndexDtos);
    }
}
