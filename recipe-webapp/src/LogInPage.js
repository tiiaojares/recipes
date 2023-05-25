import React from 'react';
import { useState } from 'react';
import './App.css';
import { SignInForm } from './forms/SignInForm';
import { NewAccountForm } from './forms/NewAccountForm';
import Form from 'react-bootstrap/Form';


const LogInPage = ({setLogIn}) => {
    const [createNewAccount, changeCreateNewAccount] = useState(false);
    const [newAccountSuccess, setNewAccountSuccess] = useState(false);
    
    function createNewAccountSuccess() {
        changeCreateNewAccount(false);
        setNewAccountSuccess(true);
        setTimeout(() => {
            setNewAccountSuccess(false);
        }, 3000)

    }


    return (
    <div>
        <div className="bgimage p-5 text-center ">
            {newAccountSuccess &&
                <Form className="success">
                    <Form.Label> New account created! </Form.Label>
                </Form> }

            <div className="container mainPageContainer">

                { !createNewAccount ?
                    <SignInForm 
                        changeCreateNewAccount={changeCreateNewAccount} 
                        setLogIn={setLogIn} /> :
                    <NewAccountForm createNewAccountSuccess={createNewAccountSuccess}/> }

            </div>
        </div>
    </div>
    );
}

export { LogInPage };
