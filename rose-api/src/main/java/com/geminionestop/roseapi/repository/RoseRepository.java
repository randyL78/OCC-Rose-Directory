package com.geminionestop.roseapi.repository;

import com.geminionestop.roseapi.models.RoseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface RoseRepository extends JpaRepository<RoseModel, Long> {
    RoseModel findBySlug(@Param("slug") String slug);
}
