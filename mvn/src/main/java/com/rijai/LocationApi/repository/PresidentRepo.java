package com.rijai.LocationApi.repository;

import com.rijai.LocationApi.model.President;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PresidentRepo extends JpaRepository<President, Long> {
    void deletePresidentById(Long id);
}
