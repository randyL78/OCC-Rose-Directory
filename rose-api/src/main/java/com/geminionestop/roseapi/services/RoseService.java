package com.geminionestop.roseapi.services;

import com.geminionestop.roseapi.dtos.RoseDetailDto;

public interface RoseService {
    public RoseDetailDto getRoseDetails(String slug);

    public RoseDetailDto createRose(RoseDetailDto roseDetailDto);
}
