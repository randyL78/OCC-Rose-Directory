package com.geminionestop.roseapi.controllers;

import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;
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
public class CompanionController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/{slug}")
    public ResponseEntity<CompanionDetailDto> getCompanion(@PathVariable("slug") String slug) {
        logger.info("Fetching companion plant {}", slug);

        CompanionDetailDto companion = CompanionDetailDto
                .builder()
                .slug("obedient-plant")
                .name("Obedient Plant")
                .imageUrl("https://directnativeplants.com/wp-content/uploads/2022/01/dreamstime_m_99850767-1.jpg")
                .description("Also called False Dragonhead, it is a Virginia Native and highly deer resistant. Has lavender-pink, 4-6” tubular flower heads that are long lasting and great for flower arrangements. This attractive perennial is snapdragon-like, but its’ square stem is typical of the mint family. If the flowers are bent, they tend to stay in the new position for a while, hence the common name Obedient Plant. It is wonderfully adaptable, tolerating both drought and poor drainage. Spreads aggressively by stolons but is easy to pull out and keep in check. Obedient plant is a good nectar source for butterflies and hummingbirds. Easy to establish and maintain. Grows 3-5’ tall and in clumps. Prefers full sun and regular watering.")
                .build();

        return ResponseEntity.ok(companion);
    }

    @GetMapping
    public ResponseEntity<List<CompanionIndexDto>> getCompanions() {
        logger.info("Fetching all companion plants");

        CompanionIndexDto companion = CompanionIndexDto
                .builder()
                .slug("obedient-plant")
                .name("Obedient Plant")
                .imageUrl("https://directnativeplants.com/wp-content/uploads/2022/01/dreamstime_m_99850767-1.jpg")
                .build();

        return ResponseEntity.ok(List.of(companion));
    }

}
