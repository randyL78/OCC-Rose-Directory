package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;
import com.geminionestop.roseapi.services.CompanionService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/companions")
@RequiredArgsConstructor
public class CompanionController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final CompanionService service;

    @GetMapping("/{slug}")
    public ResponseEntity<CompanionDetailDto> getCompanion(@PathVariable("slug") String slug) {
        logger.info("Fetching companion plant {}", slug);

        CompanionDetailDto companion = service.getCompanion(slug);

        return ResponseEntity.ok(companion);
    }

    @GetMapping
    public ResponseEntity<List<CompanionIndexDto>> getCompanions() {
        logger.info("Fetching all companion plants");

        List<CompanionIndexDto> companions = service.getCompanions();

        return ResponseEntity.ok(companions);
    }

}
