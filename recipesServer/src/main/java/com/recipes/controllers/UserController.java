package com.recipes.controllers;

import com.recipes.entities.Ingredient;
import com.recipes.entities.User;
import com.recipes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserRepository userRepo;

    @GetMapping
    List<User> getAll() {
        return userRepo.findAll();
    }


}
