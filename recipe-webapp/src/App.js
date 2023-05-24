import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SignInForm } from './forms/SignInForm';


const App = () => {
    const [createAccount, setCreateAccount] = useState(false);


    useEffect(() => {
        axios.get("/recipes").then(response => {
            console.log("recipes: ", response.data)
        })
        axios.get("/ingredients").then(response => {
            console.log("ingredients: ", response.data)
           })
    })

   
    return (
        <div>
    <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5">
        <div className="container">
            { !createAccount ?
                <SignInForm setCreateAccount={setCreateAccount} />
            :null
                
            }
        </div>
    
    </div>

    </div>
    );
}

export default App;
