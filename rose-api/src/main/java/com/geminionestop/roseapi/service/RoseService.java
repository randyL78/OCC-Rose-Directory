package com.geminionestop.roseapi.service;

import com.geminionestop.roseapi.dto.RoseDetailDto;
import org.springframework.stereotype.Service;

@Service
public class RoseService {
    public RoseDetailDto getRoseDetails(String slug) {
        return RoseDetailDto
                .builder()
                .id(1)
                .slug(slug)
                .imageUrl("https://marvel-b1-cdn.bc0a.com/f00000000184330/monticelloshop.org/cdn/shop/products/cramoisi-sup-rieur-rose-rosa-chinensis-cv-214__35430.1528316200.1280.1280.jpg?v=1679984940&width=900")
                .name("Test Rose")
                .fragranceIntensity(5)
                .build();
    }
}
