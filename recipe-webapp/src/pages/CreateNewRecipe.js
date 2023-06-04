import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

    

const CreateNewRecipe = () => {
    let user = useSelector(state => state.recipeReducer.user);
    let id = user.id;
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (id === 0) {
            navigate("/");
        }
    }, [id]);

    if (id !== 0) {
    return (
        <div className="userBackroung">
        <Navbar text={"Luo uusi resepti"}/>
        <div className="container" >
            <div className="note" > 
                <Form className="newRecipeForm"> 
                <Form.Group className="mb-3" >
                    <Form.Label> Nimi: </Form.Label>
                    <Form.Control type="text" onChange={event => setName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label> Kuvaus: </Form.Label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={event => setDescription(event.target.value)}/>
                </Form.Group>
                <Button variant='outline-secondary' style={{width: '15rem'}}> Lisää uusi työvaihe </Button>
                
                </Form>
                <div style={{position: 'absolute', bottom: '1rem', right: '1rem'}}>
                    <Button 
                        variant='success' 
                        style={{width: '6rem'}}> 
                        Tallenna 
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )}
    


}

export { CreateNewRecipe }