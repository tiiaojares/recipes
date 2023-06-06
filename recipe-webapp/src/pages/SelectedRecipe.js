import React from 'react';
import { Navbar } from './Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import recipeService from '../services/recipe';

const SelectedRecipe = () => {
    const [recipe, setRecipe] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let params = useParams();
    let id = params.id;
      

    useEffect(() => {
        recipeService
            .getRecipe(id)
            .then(response => {
                setRecipe(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                console.log("selected resipe: ", response.data)
            })
    }, [id]);

        return (
            <div className="userBackroung">
                <Navbar text={"Omat reseptit"}/>
                <div className="container" >
                    <div className="note" >
                        <h1 style={{textAlign: 'center', paddingTop: '1rem', color: '#606060'}}> { title} </h1>
                        <p style={{textAlign: 'center', fontStyle: 'italic', padding: '0.3rem'}}> { description } </p>
                    </div>
                </div>
            </div>
        )
    
}

export { SelectedRecipe }