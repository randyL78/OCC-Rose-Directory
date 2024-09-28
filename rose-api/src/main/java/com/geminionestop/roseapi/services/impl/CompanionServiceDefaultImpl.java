package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;
import com.geminionestop.roseapi.models.CompanionModel;
import com.geminionestop.roseapi.repository.CompanionRepository;
import com.geminionestop.roseapi.services.CompanionService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanionServiceDefaultImpl implements CompanionService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final CompanionRepository repository;

    @Override
    public CompanionDetailDto getCompanion(String slug) {
        CompanionModel companion = repository.findBySlug(slug);

        if(companion == null) {
            return null;
        }

        return CompanionDetailDto.Mapper.toDto(companion);
    }

    @Override
    public List<CompanionIndexDto> getCompanions() {
        return repository
                .findAll()
                .stream()
                .map(CompanionIndexDto.Mapper::toDto)
                .sorted(Comparator.comparing(CompanionIndexDto::getSlug))
                .toList();
    }
}
