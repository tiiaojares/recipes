
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { LogInPage } from './LogInPage';
import { NewAccountForm } from './forms/NewAccountForm';
import { store } from './store.js';



const Main = () => {
    return (
        <Routes>
            <Route path="/"  element={<LogInPage />} />
        </Routes>
    )
}


const App = () => {


    return (
        <Provider store={store} >
            <Router>
                <Main /> 
            </Router>
        </Provider>
    );
}

export default App;
