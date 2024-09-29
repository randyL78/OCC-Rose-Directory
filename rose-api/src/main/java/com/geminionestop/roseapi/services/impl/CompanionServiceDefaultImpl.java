package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.AdminCompanionDetailDto;
import com.geminionestop.roseapi.dto.AdminCompanionIndexDto;
import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;
import com.geminionestop.roseapi.exceptions.ResourceNotFoundException;
import com.geminionestop.roseapi.models.CompanionModel;
import com.geminionestop.roseapi.repository.CompanionRepository;
import com.geminionestop.roseapi.services.CompanionService;
import com.geminionestop.roseapi.services.QRCodeCreator;
import com.geminionestop.roseapi.utils.Slugify;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanionServiceDefaultImpl implements CompanionService {
    private final CompanionRepository repository;
    private final QRCodeCreator qrCodeCreator;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());


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

    @Override
    public List<AdminCompanionIndexDto> getAdminCompanions() {
        return repository
                .findAll()
                .stream()
                .map(AdminCompanionIndexDto.Mapper::toDto)
                .sorted(Comparator.comparing(AdminCompanionIndexDto::getSlug))
                .toList();
    }

    @Override
    public CompanionDetailDto createCompanion(CompanionDetailDto companionDetailDto) {
        companionDetailDto.setSlug(Slugify.slugify(companionDetailDto.getName()));
        CompanionModel companion = CompanionDetailDto.Mapper.toModel(companionDetailDto);
        companion.setQrCodeUrl(qrCodeCreator.createAndUploadQRCode(companion.getSlug(), "companions"));

        repository.save(companion);

        return companionDetailDto;
    }

    @Override
    public AdminCompanionDetailDto updateCompanion(String slug, AdminCompanionDetailDto companionDto) {
        CompanionModel companion = repository.findBySlug(slug);

        if(companion == null) {
            logger.error("Companion does not exist in database");
            throw new ResourceNotFoundException("Companion", "slug", slug);
        }

        companionDto.setQrCodeUrl(companion.getQrCodeUrl());

        companionDto.setSlug(Slugify.slugify(companionDto.getName()));
        if(!companionDto.getSlug().equals(companion.getSlug())) {
            logger.info("Creating new QR code for companion");
            companionDto.setQrCodeUrl(qrCodeCreator.createAndUploadQRCode(companion.getSlug(), "companions"));
        }

        AdminCompanionDetailDto.Mapper.toModel(companionDto, companion);
        repository.save(companion);

        return AdminCompanionDetailDto.Mapper.toDto(companion);
    }

    @Override
    public AdminCompanionDetailDto getAdminCompanion(String slug) {
        CompanionModel companion = repository.findBySlug(slug);

        if(companion == null) {
            throw new ResourceNotFoundException("Companion", "slug", slug);
        }

        return AdminCompanionDetailDto.Mapper.toDto(companion);
    }

    @Override
    public String deleteCompanion(String slug) {
        CompanionModel companion = repository.findBySlug(slug);

        if(companion == null) {
            throw new ResourceNotFoundException("Companion", "slug", slug);
        }

        repository.delete(companion);

        return slug;
    }
}
