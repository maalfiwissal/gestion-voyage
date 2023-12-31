package com.example.vol.controllers;

import com.example.vol.models.Vol;
import com.example.vol.repositories.VolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/vols")
public class VolController {

    @Autowired
    private VolRepository volRepository;

    @GetMapping("/list")
    public List<Vol> getAllVols() {
        return volRepository.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Vol> addVol(@RequestBody Vol v) {
        Vol vol = volRepository.save(v);
        if (vol == null)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(vol, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Vol updateVol(@RequestBody Vol v) {
        return volRepository.saveAndFlush(v);
    }
/*
    @RequestMapping(value = "/annule/{numVol}", method = RequestMethod.PUT)
    public int annulerVol(@PathVariable int numVol) {
        volRepository.annulerVol(numVol);
        return 0;
    }

    @RequestMapping(value = "/verifPlaces/{numVol}", method = RequestMethod.GET)
    int verifPlaces(@PathVariable int numVol){
        return volRepository.nbrePlaceRes(numVol);
    }

    @RequestMapping(value="/searchVols/",method=RequestMethod.POST)
    public List<Vol> searchVols(@RequestBody Vol vol) {
        return volRepository.findAllByDateDepartAndVilleDepartAndVilleArrive(vol.getDateDepart(),vol.getVilleDepart(),vol.getVilleArrive());
    }

 */

    @GetMapping("/id/{id}")
    public Optional<Vol> findById(@PathVariable Integer id) {
        return volRepository.findById(id);
    }

    @DeleteMapping("/id/{id}")
    public void deleteById(@PathVariable Integer id) {
        volRepository.deleteById(id);
    }

    

    
}
