package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;
import com.geminionestop.roseapi.exceptions.ResourceNotFoundException;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.RoseService;
import com.geminionestop.roseapi.utils.Slugify;
import org.springframework.stereotype.Service;

import java.util.Comparator;
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
    public AdminRoseDetailDto createRose(AdminRoseDetailDto roseDetailDto) {
        RoseModel rose = AdminRoseDetailDto.Mapper.toModel(roseDetailDto);

        // Override slug that came from request to keep things standardized
        String slug = Slugify.slugify(roseDetailDto.getName());
        rose.setSlug(slug);

        repository.save(rose);

        return roseDetailDto;
    }

    @Override
    public List<RoseIndexItemDto> getAllRoses() {
        return repository
                .findAll()
                .stream()
                .map(RoseIndexItemDto.Mapper::toDto)
                .sorted(Comparator.comparing(RoseIndexItemDto::slug))
                .toList();
    }

    @Override
    public RoseDetailDto updateRose(String slug, RoseDetailDto roseDetailDto) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        updateFields(rose, roseDetailDto);

        repository.save(rose);

        return RoseDetailDto.Mapper.toDto(rose);
    }

    @Override
    public List<AdminRoseIndexDto> getAllAdminRoses() {
        return repository
                .findAll()
                .stream()
                .map(AdminRoseIndexDto.Mapper::toDto)
                .sorted(Comparator.comparing(AdminRoseIndexDto::getSlug))
                .toList();
    }

    @Override
    public String deleteRose(String slug) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        repository.delete(rose);

        return slug;
    }

    private void updateFields(RoseModel rose, RoseDetailDto updatedRose) {
        if(updatedRose.name() != null) {
            rose.setName(updatedRose.name());
        }

        if(updatedRose.imageUrl() != null) {
            rose.setImageUrl(updatedRose.imageUrl());
        }

        if(updatedRose.thumbnailUrl() != null) {
            rose.setThumbnailUrl(updatedRose.thumbnailUrl());
        }

        if(updatedRose.qrCodeUrl() != null) {
            rose.setQrCodeUrl(updatedRose.qrCodeUrl());
        }

        if(updatedRose.description() != null) {
            rose.setDescription(updatedRose.description());
        }

        if(updatedRose.slug() != null) {
            rose.setSlug(updatedRose.slug());
        }

        if(updatedRose.reblooms() != null) {
            rose.setReblooms(updatedRose.reblooms());
        }

        if(updatedRose.fragranceIntensity() != null) {
            rose.setFragranceIntensity(updatedRose.fragranceIntensity());
        }

        if(updatedRose.fragranceDescription() != null) {
            rose.setFragranceDescription(updatedRose.fragranceDescription());
        }

        if(updatedRose.careInstructions() != null) {
            rose.setCareInstructions(updatedRose.careInstructions());
        }

        if(updatedRose.history() != null) {
            rose.setHistory(updatedRose.history());
        }

        if(updatedRose.colorPrimary() != null) {
            rose.setColorPrimary(updatedRose.colorPrimary());
        }

        if(updatedRose.colorSecondary() != null) {
            rose.setColorSecondary(updatedRose.colorSecondary());
        }
    }
}
