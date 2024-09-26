package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.services.RebloomService;
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
@RequestMapping("/v1/admin/reblooms")
public class AdminRebloomsController {
    private final RebloomService rebloomService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping
    public ResponseEntity<List<String>> getReblooms() {
        logger.info("Getting rebloom options");

        List<String> reblooms = rebloomService.getReblooms();

        return ResponseEntity.ok(reblooms);
    }
}
