
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { LogInPage } from './pages/LogInPage';
import { store } from './store.js';
import { MainPage } from './pages/MainPage'
import { CreateNewRecipe } from './pages/CreateNewRecipe';
import { Profile } from './pages/Profile';



const Main = () => {
    return (
        <Routes>
            <Route path="/"  element={<LogInPage />} />
            <Route path="/recipes" element={<MainPage /> } />
            <Route path="/new_recipe" element={<CreateNewRecipe />} />
            <Route path="/profile" element={<Profile />} />
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
