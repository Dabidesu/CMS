package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Senator;
import com.rijai.LocationApi.repository.SenatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SenatorService {
    private final SenatorRepo senatorRepo;

    @Autowired
    public SenatorService(SenatorRepo senatorRepo) {
        this.senatorRepo = senatorRepo;
    }
    public Senator addSenator(Senator senator) {
        return senatorRepo.save(senator);
    }
    public List<Senator> findAllSenator() {
        return senatorRepo.findAll();
    }
    public Senator updateSenator(Senator senator) {
        return senatorRepo.save(senator);
    }

    public void deleteSenator(Long id){
        senatorRepo.deleteSenatorById(id);
    }
}
