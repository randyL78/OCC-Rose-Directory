package com.geminionestop.roseapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class RoseApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(RoseApiApplication.class, args);
    }

}
