import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { setUser, store } from '../store';
import { useNavigate } from 'react-router-dom';


const SignInForm = ({ changeCreateNewAccount }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submit, changeSubmit] = useState(false);
    const [wrongPassword, changeWrongPassword] = useState(false);
    const navigate = useNavigate();
 

    function signIn() {
        changeSubmit(true);
        if (userName  && password) {
            axios.get("/user/login/"+userName).then(response => {
                if (response.data === "") {
                    changeWrongPassword(true);
                } else {
                    const getHashedPassword = response.data.password;
                    bcrypt.compare(password, getHashedPassword, function(error, isMatch) {
                        if (error) {
                            throw error;
                        } else if (!isMatch) {
                            changeWrongPassword(true);
                        } else {
                            if (!response.data.id) return;
                            else {
                                console.log("welcome ", response.data.name);
                                store.dispatch(setUser(response.data));
                                navigate("/recipes");
                            }
                            
                        }
                    })      
                }
            })
            changeSubmit(false);
        }
    }


    return (
        <div className="formComponent">
             <h2> Kirjaudu sisään: </h2>
            
            <Form className="signInForm">
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Käyttäjätunnus:</Form.Label>
                    <Form.Control type="text" onChange={event => setUserName(event.target.value)}/>
                    {submit && !userName ?
                    <Form.Text className="alertText" style={{textAlign: 'left'}}>
                        Syötä käyttäjätunnus
                    </Form.Text>
                    : null
                    }
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Salasana:</Form.Label>
                    <Form.Control type="password" onChange={event => setPassword(event.target.value)}/>
                    { submit && !password ?
                    <Form.Text className="alertText">
                        Syötä salasana
                    </Form.Text>
                    : null
                    }
                </Form.Group>
                {wrongPassword && 
                    <Form.Label style={{color:'red', textAlign:'left', marginBottom: '1rem'}}>
                        Väärä käyttäjätunnus tai salasana
                    </Form.Label>}
                <Button variant="success" onClick={() => signIn()}>
                    OK
                </Button>
                <p className="hideMobile" > Tai <u onClick={() => changeCreateNewAccount(true)}> luo uusi käyttäjä </u> </p>
                
                <div className="showMobile">
                    <p style={{textAlign:'center', marginTop:'1rem'}}> TAI </p>
                    <Button 
                        style={{width:'100%'}}
                        onClick={() => changeCreateNewAccount(true)}>
                        Luo uusi käyttäjä
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export { SignInForm }