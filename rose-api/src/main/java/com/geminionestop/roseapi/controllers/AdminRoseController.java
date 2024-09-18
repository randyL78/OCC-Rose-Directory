package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.config.EnvironmentValues;
import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/admin/roses")
public class AdminRoseController {
    private final RoseService roseService;
    private final EnvironmentValues environmentValues;
    private final Logger logger = LoggerFactory.getLogger(AdminRoseController.class);

    @GetMapping
    public ResponseEntity<List<AdminRoseIndexDto>> getAllRoses() {
        logger.info("Fetching all admin roses");

        List<AdminRoseIndexDto> adminRoseIndexDtos = roseService.getAllAdminRoses();

        return ResponseEntity.ok(adminRoseIndexDtos);
    }

    @GetMapping("/{slug}")
    public ResponseEntity<AdminRoseDetailDto> getAdminRose(@PathVariable String slug) {
        logger.info("Fetching admin rose details for {}", slug);

        AdminRoseDetailDto roseDetailDto = roseService.getAdminRose(slug);

        return ResponseEntity.ok(roseDetailDto);
    }

    @PostMapping()
    public ResponseEntity<RoseDetailDto> createRose(@RequestBody AdminRoseDetailDto roseDetailDto) {
        logger.info("Creating rose {}", roseDetailDto.getName());

        AdminRoseDetailDto response = roseService.createRose(roseDetailDto);

        return ResponseEntity.created(URI.create(environmentValues.getUrl() + "v1/roses/" + response.getSlug())).build();
    }

    @PutMapping("/{slug}")
    public ResponseEntity<AdminRoseDetailDto> updateRose(@PathVariable String slug, @RequestBody AdminRoseDetailDto roseDetailDto) {
        logger.info("Updating rose {}", roseDetailDto.getName());

        AdminRoseDetailDto updatedRoseDetail = roseService.updateRose(slug, roseDetailDto);

        return ResponseEntity.ok(updatedRoseDetail);
    }

    @DeleteMapping("/{slug}")
    public ResponseEntity<Void> deleteRose(@PathVariable("slug") String slug) {
        logger.info("Deleting rose {}", slug);

        String response = roseService.deleteRose(slug);

        if(slug.equals(response)) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.badRequest().build();
    }
}
