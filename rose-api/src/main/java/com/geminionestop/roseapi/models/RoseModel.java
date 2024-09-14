package com.geminionestop.roseapi.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(indexes = @Index(columnList = "slug"))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String slug;

    @Column(unique = true, nullable = false)
    private String name;

    @Column(nullable = false)
    private String imageUrl;

    @Column()
    private String thumbnailUrl;

    @Column
    private String qrCodeUrl;

    @Column(nullable = false)
    private String reblooms;

    @Column(nullable = false)
    private String colorPrimary;

    @Column()
    private String colorSecondary;

    @Column(nullable = false, columnDefinition = "text")
    private String description;

    @Column(nullable = false, columnDefinition = "text")
    private String history;

    @Column(nullable = false, columnDefinition = "text")
    private String careInstructions;

    @Column(nullable = false)
    private Integer fragranceIntensity;

    @Column()
    private String fragranceDescription;
}
