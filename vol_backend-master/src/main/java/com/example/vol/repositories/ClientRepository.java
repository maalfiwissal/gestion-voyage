package com.example.vol.repositories;

import com.example.vol.models.Client;

import com.example.vol.models.Reservation;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Transactional()
public interface ClientRepository extends JpaRepository<Client, Integer> {
    Client findByLoginCltAndPasswordClt(String login_clt, String password_clt);
    Client findByIdClt(int id);
}