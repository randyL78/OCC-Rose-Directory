package com.geminionestop.roseapi.repository;

import com.geminionestop.roseapi.models.CompanionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface CompanionRepository extends JpaRepository<CompanionModel, Long> {
    CompanionModel findBySlug(@Param("slug") String slug);
}
