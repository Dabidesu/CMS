package com.rijai.LocationApi.repository;

import com.rijai.LocationApi.model.Senator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SenatorRepo extends JpaRepository<Senator, Long> {
    void deleteSenatorById(Long id);
    List<Senator> findByPresident(String name);
}
