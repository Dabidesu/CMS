package com.rijai.LocationApi.service;


import com.rijai.LocationApi.model.President;
import com.rijai.LocationApi.repository.PresidentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PresidentService {
    private final PresidentRepo presidentRepo;

    @Autowired
    public PresidentService(PresidentRepo presidentRepo) {
        this.presidentRepo = presidentRepo;
    }
    public President addPresident(President president) {
        return presidentRepo.save(president);
    }
    public List<President> findAllPresident() {
        return presidentRepo.findAll();
    }
    public President updatePresident(President president) {
        return presidentRepo.save(president);
    }

    public void deletePresident(Long id){
        presidentRepo.deletePresidentById(id);
    }


}
