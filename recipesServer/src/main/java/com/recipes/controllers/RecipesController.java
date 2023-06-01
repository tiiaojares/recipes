package com.recipes.controllers;
import com.recipes.entities.Recipe;
import com.recipes.repositories.RecipeRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("recipes")
public class RecipesController {

    @Autowired
    RecipeRepository recipeRepo;

    @GetMapping
    List<Recipe> getAll() {
        return recipeRepo.findAll();

    }

    @GetMapping("/{id}")
    Recipe get(@PathVariable int id) {
        Recipe r = recipeRepo.findById(id).orElse(null);
        if (r == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Foo Not Found");
        }
        return r;
    }

    @GetMapping("/user/{userId}")
    List<Recipe> getRecipesByUserId(@PathVariable int userId) {
        List<Recipe> recipes = recipeRepo.findByUserId(userId);
        if(recipes.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Foo Not Found");

        }
        return recipes;
    }

    @PostMapping
    Recipe create(@RequestBody Recipe newRecipe) {
        recipeRepo.saveAndFlush(newRecipe);
        return newRecipe;
    }

}
