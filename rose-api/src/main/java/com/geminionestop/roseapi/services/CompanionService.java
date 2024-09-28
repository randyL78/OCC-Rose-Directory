package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;

import java.util.List;

public interface CompanionService {
    public CompanionDetailDto getCompanion(String slug);

    public List<CompanionIndexDto> getCompanions();
}
