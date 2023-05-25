import React from 'react';
import { useState } from 'react';
import './App.css';
import { LogInPage } from './LogInPage';



const App = () => {
    const [logIn, setLogIn] = useState(false);
 

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
