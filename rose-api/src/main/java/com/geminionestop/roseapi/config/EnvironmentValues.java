package com.geminionestop.roseapi.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Setter
@Getter
@ConfigurationProperties("environmentvalues")
public class EnvironmentValues {
    private String url = "https://api-rosedirectory/";
}
