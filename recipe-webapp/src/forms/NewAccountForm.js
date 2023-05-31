
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import userService from '../services/user';
import { useState } from 'react';
import bcrypt from 'bcryptjs';


const NewAccountForm = ({ createNewAccountSuccess, changeCreateNewAccount }) => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [submit, changeSubmit] = useState(false);
    const [info, setInfo] = useState(false);
  

    function createAccount(ev) {
        ev.preventDefault();
        console.log(name, userName, password1, password2)
        if (name && userName && password1 && password2) {
            axios.get("/user/login/"+userName).then(response => {
                console.log("response: ", response.data)
                if (response.data === "") {
                    if (password1 === password2) {

                        const userObject = {
                            name: name,
                            username: userName,
                            password: bcrypt.hashSync(password1, 10)
                        }
                        
                        userService
                            .createUser(userObject)
                            .then(response => {
                                console.log("new account created");
                                createNewAccountSuccess(true);
                                changeCreateNewAccount(false);
                            })
                    } else {
                        setInfo("The password and its confirmation do not match...");
                        changeSubmit(false);
                    }
                } else {
                    setInfo("Username not available");
                }
            })     
               
        } else {
            changeSubmit(true);
        }  
    }


    
    const closeIcon = () => {
        return (
            <svg onClick={() => changeCreateNewAccount(false)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" className="bi bi-x-lg xIcon" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        )
    }

    return (
        <div className="formComponent newAccount">   
            <div className="closeIcon" >
                {closeIcon()} 
            </div> 
            <h4> Create a new account: </h4>
            <Form className="signInForm">

                { info && 
                    <Form.Label className="infoText">
                        { info }
                    </Form.Label>}
           
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={event => setName(event.target.value)}/>
                    {submit && !name ?
                    <Form.Text className="alertText">
                        Enter your name
                    </Form.Text>
                    : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"  onChange={event => setUserName(event.target.value)}/>
                    {submit && !userName ?
                    <Form.Text className="alertText">
                        Enter your username
                    </Form.Text>
                    : null
                    }
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={event => setPassword1(event.target.value)}/>
                    { submit && !password1 ?
                    <Form.Text className="alertText">
                        Enter your password
                    </Form.Text>
                    : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm the password</Form.Label>
                    <Form.Control type="password" onChange={event => setPassword2(event.target.value)}/>
                    { submit && !password2 ?
                    <Form.Text className="alertText">
                        Confirm the password
                    </Form.Text>
                    : null
                    }
                </Form.Group>

                <button className="btn btn-success" onClick={(ev) => createAccount(ev)}>
                    Submit
                </button>
              
            </Form>
        </div>
       
    )
}

export { NewAccountForm }