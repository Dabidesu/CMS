package com.rijai.LocationApi.service;


import com.rijai.LocationApi.model.President;
import com.rijai.LocationApi.repository.PresidentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PresidentService {
    private final PresidentRepo presidentRepo;

    @Autowired
    public PresidentService(PresidentRepo presidentRepo) {
        this.presidentRepo = presidentRepo;
    }

    public List<President> findAllPresident() {
      return presidentRepo.findAll();
    }

    public President addPresident(President president) {
        return presidentRepo.save(president);
    }

    public President updatePresident(President president) {
        return presidentRepo.save(president);
    }

    public President getPresident(long id) {
      Optional optional=presidentRepo.findById(id);
      if(optional.isEmpty())
        return null;
      else
        return (President) optional.get();
    }

    public void deletePresident(Long id){
        presidentRepo.deletePresidentById(id);
    }


}
