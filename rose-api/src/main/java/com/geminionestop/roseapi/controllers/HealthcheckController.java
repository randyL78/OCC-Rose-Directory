package com.geminionestop.roseapi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthcheckController {
    @GetMapping("v1/healthcheck")
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("Healthy");
    }

    @GetMapping("/healthcheck")
    public ResponseEntity<String> baseHealthcheck() {
        return ResponseEntity.ok("Healthy");
    }

    @GetMapping("/")
    public ResponseEntity<String> baseUrl() {
        return ResponseEntity.ok("Healthy");
    }
}
