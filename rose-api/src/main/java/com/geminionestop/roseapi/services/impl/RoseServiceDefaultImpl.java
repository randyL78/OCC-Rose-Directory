package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.AdminRoseDetailDto;
import com.geminionestop.roseapi.dto.AdminRoseIndexDto;
import com.geminionestop.roseapi.dto.RoseDetailDto;
import com.geminionestop.roseapi.dto.RoseIndexItemDto;
import com.geminionestop.roseapi.exceptions.ResourceNotFoundException;
import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.QRCodeCreator;
import com.geminionestop.roseapi.services.RoseService;
import com.geminionestop.roseapi.utils.Slugify;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoseServiceDefaultImpl implements RoseService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final RoseRepository repository;
    private final QRCodeCreator qrCodeCreator;

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

        // Calculate QR Code Url
        rose.setQrCodeUrl(qrCodeCreator.createAndUploadQRCode(roseDetailDto.getSlug(), "roses"));

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
    public AdminRoseDetailDto updateRose(String slug, AdminRoseDetailDto roseDetailDto) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            logger.error("Rose does not exist in database");
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        roseDetailDto.setSlug(Slugify.slugify(roseDetailDto.getName()));
        roseDetailDto.setQrCodeUrl(rose.getQrCodeUrl());
        if(!roseDetailDto.getSlug().equals(rose.getSlug())) {
            roseDetailDto.setQrCodeUrl(qrCodeCreator.createAndUploadQRCode(roseDetailDto.getSlug(), "roses"));
        }

        AdminRoseDetailDto.Mapper.toModel(roseDetailDto, rose);
        repository.save(rose);

        return AdminRoseDetailDto.Mapper.toDto(rose);
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

    @Override
    public AdminRoseDetailDto getAdminRose(String slug) {
        RoseModel rose = repository.findBySlug(slug);

        if(rose == null) {
            throw new ResourceNotFoundException("Rose", "slug", slug);
        }

        return AdminRoseDetailDto.Mapper.toDto(rose);
    }
}
