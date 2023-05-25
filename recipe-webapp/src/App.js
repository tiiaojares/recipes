import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SignInForm } from './forms/SignInForm';
import { NewAccountForm } from './forms/NewAccountForm';
import Form from 'react-bootstrap/Form';
import { LogInPage } from './LogInPage';



const App = () => {
    const [logIn, setLogIn] = useState(false);

    


    // useEffect(() => {
    //     axios.get("/recipes").then(response => {
    //         console.log("recipes: ", response.data)
    //     })
    //     axios.get("/ingredients").then(response => {
    //         console.log("ingredients: ", response.data)
    //        })
    // })

   


    return (
        <div>
        {!logIn ?
            <LogInPage setLogIn={setLogIn}/>
        :
            <div> tervetuloa! </div>
        }
        </div> 
    );
}

export default App;
