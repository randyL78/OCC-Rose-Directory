package com.geminionestop.roseapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RoseApiApplication {
    record Greeting(String message) {}

    @RequestMapping("/")
    ResponseEntity<Greeting> home() {
        Greeting greeting = new Greeting("Hello from Rose Directory.");

        return ResponseEntity.ok(greeting);
    }

    public static void main(String[] args) {
        SpringApplication.run(RoseApiApplication.class, args);
    }

}
