import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SignInForm } from './forms/SignInForm';
import { NewAccountForm } from './forms/NewAccountForm';
import Form from 'react-bootstrap/Form';



const App = () => {
    const [createNewAccount, changeCreateNewAccount] = useState(false);
    const [newAccountSuccess, setNewAccountSuccess] = useState(false);
    


    useEffect(() => {
        axios.get("/recipes").then(response => {
            console.log("recipes: ", response.data)
        })
        axios.get("/ingredients").then(response => {
            console.log("ingredients: ", response.data)
           })
    })

    function createNewAccountSuccess() {
        changeCreateNewAccount(false);
        setNewAccountSuccess(true);
        setTimeout(() => {
            setNewAccountSuccess(false);
        }, 3000)

    }


    return (
        <div>
    <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5">
    {newAccountSuccess &&
                        <Form className="success">
                            <Form.Label>
                                New account created!
                            </Form.Label>
                        </Form> }
        <div className="container mainPageContainer">
            { !createNewAccount ?
                <div>
                   
                    <SignInForm 
                        changeCreateNewAccount={changeCreateNewAccount} /> 
                </div>:
                <NewAccountForm createNewAccountSuccess={createNewAccountSuccess}/>
            
                
            }
        </div>
    
    </div>

    </div>
    );
}

export default App;
