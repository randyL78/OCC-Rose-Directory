package com.geminionestop.roseapi.controller;

import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.service.RoseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/roses")
public class RoseController {
    private RoseService roseService;

    RoseController(RoseService roseService) {
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
}
