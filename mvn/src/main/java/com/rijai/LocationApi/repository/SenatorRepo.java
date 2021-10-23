package com.rijai.LocationApi.repository;

import com.rijai.LocationApi.model.Senator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SenatorRepo extends JpaRepository<Senator, Long> {
    void deleteSenatorById(Long id);
}
