package com.geminionestop.roseapi.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(EnvironmentValues.class)
public class AppConfig {

}
