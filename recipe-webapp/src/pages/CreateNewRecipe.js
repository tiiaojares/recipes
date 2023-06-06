import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import recipeService from '../services/recipe';

    

const CreateNewRecipe = () => {
    let user = useSelector(state => state.recipeReducer.user);
    let id = user.id;
    const navigate = useNavigate();
    const [alert, setAlert] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (id === 0) {
            navigate("/");
        }
    }, [id]);

    function saveNewRecipe() {
        console.log("kateoria: ", category)
        const recipeObject = {
            title: title,
            description: description,
            userId: id
        }
        if (title) {
            recipeService
                .createRecipe(recipeObject)
                .then(response => {
                    console.log("new recipe created: ", response.data);
                    navigate("/recipes");
                })
        } else {
            setAlert("Lisää puuttuvat tiedot");

        }
    }

    if (id !== 0) {
    return (
        <div className="userBackroung">
        <Navbar text={"Luo uusi resepti"}/>
        <div className="container" >
            <div className="note" > 
                <Form className="newRecipeForm"> 
                { alert && <Form.Label className="infoText" style={{marginBottom: '1.5rem'}}> { alert } </Form.Label> }

                <Form.Group className="mb-3" >
                    <Form.Label> Otsikko: </Form.Label>
                    <Form.Control type="text" onChange={event => setTitle(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label> Kuvaus: </Form.Label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={event => setDescription(event.target.value)}/>
                </Form.Group>
                
                <div className="form-group">
                    <label for="inputState" style={{marginBottom: '0.5rem'}}> Kategoria: </label>
                    <select id="inputState" value={category} onChange={ev => setCategory(ev.target.value)} className="form-control">
                        <option selected></option>
                        <option value="adult" > Aikuiseen makuun </option>
                        <option value="kids"> Lasten makuun </option>
                        <option value="family"> Koko perheen makuun </option>
                        <option value="snack"> Välipala </option>
                        <option value="breakfastSupper"> Aamu-/ iltapala </option>
                        <option value="dessert"> Jälkiruoka </option>
                        <option value="party"> Juhliin </option>
                        
                    </select>
                </div>
                <Button variant='outline-secondary' style={{width: '15rem', marginTop: '2rem'}}> Lisää uusi työvaihe </Button>
                </Form>
                <div style={{position: 'absolute', bottom: '1rem', right: '1rem'}}>
                    <Button 
                        variant='success' 
                        style={{width: '6rem'}}
                        onClick={() => saveNewRecipe()}> 
                        Tallenna 
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )}
    


}

export { CreateNewRecipe }