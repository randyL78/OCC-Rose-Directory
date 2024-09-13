package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/roses")
public class RoseController {
    private final RoseService roseService;
    private final EnvironmentValues environmentValues;
    private final Logger logger = LoggerFactory.getLogger(RoseController.class);

    public RoseController(RoseService roseService, EnvironmentValues environmentValues) {
        this.roseService = roseService;
        this.environmentValues = environmentValues;
    }

    @GetMapping("/{slug}")
    public ResponseEntity<RoseDetailDto> getRoseDetails(@PathVariable String slug) {
        logger.info("Fetching {}", slug);

        RoseDetailDto roseDetailDto = roseService.getRoseDetails(slug);

        if (roseDetailDto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(roseDetailDto);
    }

    @GetMapping
    public ResponseEntity<List<RoseDetailDto>> getAllRoses() {
        logger.info("Fetching all roses");

        List<RoseDetailDto> roseDetailDtos = roseService.getAllRoses();

        return ResponseEntity.ok(roseDetailDtos);
    }

    @PostMapping()
    public ResponseEntity<RoseDetailDto> createRose(@RequestBody RoseDetailDto roseDetailDto) {
        logger.info("Creating rose {}", roseDetailDto.name());
        
        roseService.createRose(roseDetailDto);

        return ResponseEntity.created(URI.create(environmentValues.getUrl() + "v1/roses/" + roseDetailDto.slug())).build();
    }
}
