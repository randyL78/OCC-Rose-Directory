package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;

import java.util.List;

public interface RoseService {
    public RoseDetailDto getRoseDetails(String slug);

    public AdminRoseDetailDto createRose(AdminRoseDetailDto roseDetailDto);

    public List<RoseIndexItemDto> getAllRoses();

    public AdminRoseDetailDto updateRose(String slug,AdminRoseDetailDto roseDetailDto);

    public List<AdminRoseIndexDto> getAllAdminRoses();

    public String deleteRose(String slug);

    public AdminRoseDetailDto getAdminRose(String slug);
}
