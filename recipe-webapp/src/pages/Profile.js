import { Navbar } from './Navbar';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Profile = () => {
    let user = useSelector(state => state.recipeReducer.user);
    const [changeInformation, changeChangeInformation] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    useEffect(() => {
        setName(user.name);
        setUsername(user.username);
    }, [])
    

    function saveChanges() {
        console.log("tallennetaan:", name, username)
        changeChangeInformation(false);
    }

    return (
        <div className="userBackroung">
            <Navbar text={"Profiili"}/>
            <div className="container" >
                    <div className="table-responsive profileTable">
                    {!changeInformation ?
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Nimi</th>
                                    <td> { name } </td>
                                </tr>
                                <tr>
                                    <th>Käyttäjätunnus</th>
                                    <td> { username } </td>
                                </tr>
                                <tr>
                                    <th>Salasana</th>
                                    <td> *****</td>
                                </tr>
                            </tbody>
                        </table> :
                             
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label> Nimi: </Form.Label>
                                <Form.Control type="text" value={name} onChange={event => setName(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label> Käyttäjätunnus: </Form.Label>
                                <Form.Control type="text" value={username} onChange={event => setUsername(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label style={{ marginTop: '2rem'}}> Vaihda salasana: </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="password" placeholder="Vanha salasana" onChange={event => setOldPassword(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="password"  placeholder="Uusi salasana" onChange={event => setPassword1(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="password" placeholder="Uusi salasana uudelleen" onChange={event => setPassword2(event.target.value)}/>
                            </Form.Group>
                        </Form>
                    }
                     
                       


                        <div style={{textAlign: 'right'}}>
                            {changeInformation ? 
                            <Button
                            variant='outline-success'
                            style={{width: '100%', 
                            marginTop: '2rem'}}
                            onClick={() => saveChanges()}> 
                                Tallenna
                            </Button>
                            :
                            <Button 
                            variant='outline-secondary' 
                            style={{width: '100%', 
                            marginTop: '2rem'}}
                            onClick={() => changeChangeInformation(true)}> 
                                Muokkaa 
                                <svg style={{marginLeft: '0.5rem'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                            </Button>
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export { Profile }