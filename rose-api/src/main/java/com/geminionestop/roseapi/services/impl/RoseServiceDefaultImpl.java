package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.RoseService;
import com.geminionestop.roseapi.utils.Slugify;
import org.springframework.stereotype.Service;

import java.util.List;

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

        // Override slug that came from request to keep things standardized
        String slug = Slugify.slugify(roseDetailDto.name());
        rose.setSlug(slug);

        repository.save(rose);

        return roseDetailDto;
    }

    @Override
    public List<RoseIndexItemDto> getAllRoses() {
        return repository.findAll().stream().map(RoseIndexItemDto.Mapper::toDto).toList();
    }
}
