package com.recipes.repositories;

import com.recipes.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("SELECT r FROM Recipe r WHERE r.userId = :id")
    List<Recipe> findByUserId(Integer id);
}
