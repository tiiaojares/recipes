import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'



    

const CreateNewRecipe = () => {
    let user = useSelector(state => state.recipeReducer.user);
    let id = user.id;
    const navigate = useNavigate();

    useEffect(() => {
        if (id === 0) {
            navigate("/");
        }
    }, [id]);

    if (id !== 0) {
    return (
        <div className="userBackroung">
        <Navbar text={"Create a new recipe"}/>
        <div className="container">
            <div > 
            </div>
        </div>
    </div>
    )}
    


}

export { CreateNewRecipe }