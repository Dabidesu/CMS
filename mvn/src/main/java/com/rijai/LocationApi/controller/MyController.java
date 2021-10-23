package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.President;
import com.rijai.LocationApi.model.Senator;
import com.rijai.LocationApi.service.PresidentService;
import com.rijai.LocationApi.service.SenatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
public class MyController {
    private final PresidentService presidentService;
    private final SenatorService senatorService;

    public MyController(PresidentService presidentService, SenatorService senatorService) {
        this.presidentService = presidentService;
        this.senatorService = senatorService;
    }

    /*------------------------------------PRESIDENT----------------------------*/

    @GetMapping("/president/all")
    public ResponseEntity<List<President>> getAllPresident () {
        List<President> president = presidentService.findAllPresident();
        return new ResponseEntity<>(president, HttpStatus.OK);
    }

    @PostMapping("/president/add")
    public ResponseEntity<President> addPresident (@RequestBody President president) {
        President newPresident = presidentService.addPresident(president);
        return new ResponseEntity<>(newPresident, HttpStatus.CREATED);
    }

    @PutMapping("/president/update")
    public ResponseEntity<President> updatePresident (@RequestBody President president) {
        President updatePresident = presidentService.updatePresident(president);
        return new ResponseEntity<>(updatePresident, HttpStatus.OK);
    }

    @DeleteMapping("/president/delete/{id}")
    public ResponseEntity<?> deletePresident (@PathVariable("id") Long id) {
        presidentService.deletePresident(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*@GetMapping("/find/{id}")
    public ResponseEntity<President> getPresidentById (@PathVariable("id") Long id) {
        President president = presidentService.findPresidentById(id);
    }*/

    /*------------------------------------SENATOR----------------------------*/

    @GetMapping("/senator/all")
    public ResponseEntity<List<Senator>> getAllSenator () {
        List<Senator> senator = senatorService.findAllSenator();
        return new ResponseEntity<>(senator, HttpStatus.OK);
    }

    @PostMapping("/senator/add")
    public ResponseEntity<Senator> addSenator (@RequestBody Senator senator) {
        Senator newSenator = senatorService.addSenator(senator);
        return new ResponseEntity<>(newSenator, HttpStatus.CREATED);
    }

    @PutMapping("/senator/update")
    public ResponseEntity<Senator> updateSenator (@RequestBody Senator senator) {
        Senator updateSenator = senatorService.updateSenator(senator);
        return new ResponseEntity<>(updateSenator, HttpStatus.OK);
    }

    @DeleteMapping("/senator/delete/{id}")
    public ResponseEntity<?> deleteSenator (@PathVariable("id") Long id) {
        senatorService.deleteSenator(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}