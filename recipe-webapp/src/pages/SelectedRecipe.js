import React from 'react';
import { Navbar } from './Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import recipeService from '../services/recipe';

const SelectedRecipe = () => {
    const [recipe, setRecipe] = useState();

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        recipeService
            .getRecipe(id)
            .then(response => {
                setRecipe(response.data);
                console.log("selected resipe: ", response.data)
            })
    }, [id]);

    return (
        <div className="userBackroung">
            <Navbar text={"Omat reseptit"}/>
            <div className="container" >
                
            </div>
        </div>
    )
}

export { SelectedRecipe }