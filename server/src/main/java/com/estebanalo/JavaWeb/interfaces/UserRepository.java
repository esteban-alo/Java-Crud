/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.estebanalo.JavaWeb.interfaces;


import com.estebanalo.JavaWeb.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Esteban Rodriguez A
 */
@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
public interface UserRepository extends JpaRepository<User, Long> { }
