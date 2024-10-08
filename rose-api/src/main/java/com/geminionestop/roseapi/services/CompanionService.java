package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dto.AdminCompanionDetailDto;
import com.geminionestop.roseapi.dto.AdminCompanionIndexDto;
import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;

import java.util.List;

public interface CompanionService {
    CompanionDetailDto getCompanion(String slug);

    List<CompanionIndexDto> getCompanions();

    List<AdminCompanionIndexDto> getAdminCompanions();

    CompanionDetailDto createCompanion(CompanionDetailDto adminCompanionDetailDto);

    AdminCompanionDetailDto updateCompanion(String slug, AdminCompanionDetailDto adminCompanionDetailDto);

    AdminCompanionDetailDto getAdminCompanion(String slug);

    String deleteCompanion(String slug);
}
