package com.geminionestop.roseapi.integration;

import com.geminionestop.roseapi.RoseApiApplication;
import com.geminionestop.roseapi.dtos.RoseDetailDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(
        classes = RoseApiApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
public class RoseDetailTest {
    @LocalServerPort
    int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void shouldReturnRoseDetails() {
        String uri = "http://localhost:" + port + "/v1/roses/test-rose";
        RoseDetailDto roseDetails = restTemplate.getForObject(uri, RoseDetailDto.class);

        assertThat(roseDetails)
                .isNotNull()
                .hasFieldOrPropertyWithValue("name", "Test Rose")
                .hasFieldOrPropertyWithValue("slug", "test-rose");
    }
}
