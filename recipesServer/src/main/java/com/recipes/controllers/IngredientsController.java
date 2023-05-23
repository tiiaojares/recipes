package com.recipes.controllers;


import com.recipes.entities.Ingredient;
import com.recipes.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("ingredients")
public class IngredientsController {

    @Autowired
    IngredientRepository ingredientRepo;

    @GetMapping
    List<Ingredient> getAll() {
        return ingredientRepo.findAll();
    }
}
