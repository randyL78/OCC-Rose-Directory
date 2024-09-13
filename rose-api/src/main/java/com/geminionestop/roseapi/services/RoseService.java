package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dto.RoseDetailDto;

import java.util.List;

public interface RoseService {
    public RoseDetailDto getRoseDetails(String slug);

    public RoseDetailDto createRose(RoseDetailDto roseDetailDto);

    public List<RoseDetailDto> getAllRoses();
}
