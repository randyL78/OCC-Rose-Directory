package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.dto.AdminCompanionIndexDto;
import com.geminionestop.roseapi.dto.CompanionDetailDto;
import com.geminionestop.roseapi.dto.CompanionIndexDto;
import com.geminionestop.roseapi.models.CompanionModel;
import com.geminionestop.roseapi.repository.CompanionRepository;
import com.geminionestop.roseapi.services.CompanionService;
import com.geminionestop.roseapi.services.QRCodeCreator;
import com.geminionestop.roseapi.utils.Slugify;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanionServiceDefaultImpl implements CompanionService {
    private final CompanionRepository repository;
    private final QRCodeCreator qrCodeCreator;

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
}
