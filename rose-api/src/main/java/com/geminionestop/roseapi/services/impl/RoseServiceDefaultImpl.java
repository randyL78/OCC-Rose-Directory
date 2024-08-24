package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dtos.RoseDetailDto;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.RoseService;
import org.springframework.stereotype.Service;

@Service
public class RoseServiceDefaultImpl implements RoseService {
    private final RoseRepository repository;

    public RoseServiceDefaultImpl(RoseRepository repository) {
        this.repository = repository;
    }

    @Override
    public RoseDetailDto getRoseDetails(String slug) {
        RoseModel rose = repository.findBySlug(slug);
        if (rose == null) {
            return null;
        }

        return RoseDetailDto.Mapper.toDto(rose);
    }

    @Override
    public RoseDetailDto createRose(RoseDetailDto roseDetailDto) {
        RoseModel rose = RoseDetailDto.Mapper.toModel(roseDetailDto);

        repository.save(rose);

        return roseDetailDto;
    }
}
