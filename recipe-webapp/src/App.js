
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { useState } from 'react';
import './App.css';
import { LogInPage } from './LogInPage';
import { store } from './store.js';



const App = () => {
    const [logIn, setLogIn] = useState(false);


    return (
        <Provider store={store} >
            <Router>
                <div>
                {!logIn ?
                    <LogInPage setLogIn={setLogIn}/>
                :
                    <div> tervetuloa! </div>
                }
                </div> 
            </Router>
        </Provider>
    );
}

export default App;
