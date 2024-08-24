package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
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
    private final RoseService roseService;
    private final EnvironmentValues environmentValues;

    public RoseController(RoseService roseService, EnvironmentValues environmentValues) {
        this.roseService = roseService;
        this.environmentValues = environmentValues;
    }

    @GetMapping("/{slug}")
    public ResponseEntity<RoseDetailDto> getRoseDetails(@PathVariable String slug) {
        RoseDetailDto roseDetailDto = roseService.getRoseDetails(slug);

        if (roseDetailDto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(roseDetailDto);
    }

    @PostMapping()
    public ResponseEntity<RoseDetailDto> createRose(@RequestBody RoseDetailDto roseDetailDto) {
        roseService.createRose(roseDetailDto);

        return ResponseEntity.created(URI.create(environmentValues.getUrl() + "v1/roses/" + roseDetailDto.slug())).build();
    }
}
