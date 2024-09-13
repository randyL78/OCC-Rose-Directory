package com.geminionestop.roseapi.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

@Component
public class BasicAuthEntryPoint extends BasicAuthenticationEntryPoint {
    Logger logger = LoggerFactory.getLogger(BasicAuthEntryPoint.class);

    @Autowired
    UserDetailsService users;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        logger.info(authException.getMessage());

        logger.info(users.loadUserByUsername("admin").getUsername());
        logger.info(users.loadUserByUsername("admin").getPassword());

        response.addHeader("WWW-Authenticate", "Basic realm=\"" + getRealmName() + "\"");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        PrintWriter writer = response.getWriter();
        writer.println("HTTP Status 401 - " + authException.getMessage());
    }

    @Override
    public void afterPropertiesSet() {
        setRealmName("Ranbo Roses");
        super.afterPropertiesSet();
    }
}
