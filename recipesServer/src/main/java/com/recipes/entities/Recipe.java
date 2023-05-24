package com.recipes.entities;


import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer Id;
    @Column (name = "title")
    private String title;
    @Column (name = "description")
    private String description;

    public Recipe() {

    }
    public Recipe(Integer id, String title, String description) {
        this.Id = id;
        this.title = title;
        this.description = description;

    }

    public Integer getId() {
        return Id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}