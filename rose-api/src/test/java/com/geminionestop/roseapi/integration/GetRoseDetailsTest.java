package com.geminionestop.roseapi.integration;

import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.services.RoseService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-integrationtest.properties")
class GetRoseDetailsTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private RoseService roseService;

    @BeforeEach
    void setUp() {
        roseService.createRose(getRoseDetailDto());
    }

    @Test
    void shouldReturnOkStatus() throws Exception {
        mvc.perform(get("/v1/roses/test-rose").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    private RoseDetailDto getRoseDetailDto() {
        return RoseDetailDto
                .builder()
                .imageUrl("https://example.com/image.jpg")
                .name("Test Rose")
                .slug("test-rose")
                .reblooms("Yep")
                .description("Test description")
                .careInstructions("Plant it")
                .history("Been around awhile")
                .colorPrimary("white")
                .fragranceIntensity(3)
                .build();
    }
}