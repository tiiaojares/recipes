package com.recipes.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Ingredient {
    @jakarta.persistence.Id
    private Integer Id;
    @Column (name = "recipe_id")
    private Integer recipeId;
    @Column (name = "ingredient")
    private String ingredient;
    @Column (name = "amount")
    private Integer amount;
    @Column (name = "unit")
    private String unit;


    public Ingredient() {

    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Integer recipeId) {
        this.recipeId = recipeId;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
