package com.example.vol.controllers;

import com.example.vol.models.Client;

import com.example.vol.models.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.vol.repositories.ClientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/clts")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("/list")
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Client> addClient(@RequestBody Client c) {
        Client clt = clientRepository.save(c);
        if (clt == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(clt, HttpStatus.CREATED);
    }

    @PutMapping("/id/{id}")
    public Client updateClient(@RequestBody Client c) {
        return clientRepository.saveAndFlush(c);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Client> signInClient(@RequestBody Client client) {
        Client result = clientRepository.findByLoginCltAndPasswordClt(client.getLoginClt(), client.getPasswordClt());
        if (result == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/listres/{id}", method = RequestMethod.GET)
    public List<Reservation> getListReservationsById(@PathVariable int id) {
      return clientRepository.findByIdClt(id).getReservations();
    }

    @DeleteMapping("/id/{id}")
    public void deleteById(@PathVariable Integer id) {
        clientRepository.deleteById(id);
    }

    @GetMapping("/id/{id}")
    public Optional<Client> findById(@PathVariable Integer id) {
        return clientRepository.findById(id);
    }

    
    
}
