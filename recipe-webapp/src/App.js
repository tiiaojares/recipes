
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { LogInPage } from './pages/LogInPage';
import { store } from './store.js';
import { MainPage } from './pages/MainPage'
import { CreateNewRecipe } from './pages/CreateNewRecipe';



const Main = () => {
    return (
        <Routes>
            <Route path="/"  element={<LogInPage />} />
            <Route path="/welcome" element={<MainPage /> } />
            <Route path="/newRecipe" element={<CreateNewRecipe />} />
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
