package com.recipes.controllers;

import com.recipes.entities.User;
import com.recipes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepo;

    @GetMapping
    List<User> getAll() {
        return userRepo.findAll();
    }

    @PostMapping
    User create(@RequestBody User newUser) {
        userRepo.saveAndFlush(newUser);
        return newUser;
    }

    @GetMapping("/login/{username}")
    User getUserByUsername(@PathVariable String username) {
        User foundUser = userRepo.findByUsername(username);
        return foundUser;
    }


}
