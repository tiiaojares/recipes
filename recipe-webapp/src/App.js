import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

    React.useEffect(() => {
        axios.get("/recipes").then(response => {
            console.log("recipes: ", response.data)
        })
        axios.get("/ingredients").then(response => {
            console.log("ingredients: ", response.data)
           })
    })

    return (
    <div>
      <header>
        <p> alkua </p>
      </header>
    </div>
    );
}

export default App;
