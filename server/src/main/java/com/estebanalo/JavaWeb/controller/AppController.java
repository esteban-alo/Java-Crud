/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.estebanalo.JavaWeb.controller;

import com.estebanalo.JavaWeb.interfaces.UserRepository;
import com.estebanalo.JavaWeb.models.User;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Esteban Rodriguez A
 */

@RestController
public class AppController {
    
    @Autowired
    UserRepository service;
       
    /**
     *
     * @return
     */
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return service.findAll();
    }
    
    /**
     *
     * @param id
     * @return
     */
    @GetMapping(path = {"/id"})
    public User getUserById(@PathVariable("id") Long id) {
        Optional<User> user = service.findById(id);
        return user.get();
    }
    
    /**
     *
     * @param u
     * @return
     */
    @PostMapping("/users")
    public User addUser(@RequestBody User u) {
        return service.save(u);
    }
    
    /**
     *
     * @param u
     * @param id
     * @return
     */
    @PutMapping("/users/{id}")
    public User editUser(@RequestBody User u, @PathVariable("id") Long id) {
        u.setId(id);
        return service.save(u);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        Optional<User> user = service.findById(id);
        service.delete(user.get());
    }
}
