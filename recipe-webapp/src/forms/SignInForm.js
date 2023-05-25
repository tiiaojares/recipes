import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SignInForm = ({changeCreateNewAccount, setLogIn}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submit, changeSubmit] = useState(false);
    const [wrongPassword, changeWrongPassword] = useState(false);

    function signIn() {
        changeSubmit(true);
        if (userName  && password) {
            axios.get("/user/login/"+userName).then(response => {
                if (response.data === "") {
                    changeWrongPassword(true);
                } else {
                    if (response.data.password === password) {
                        console.log("sisään kirjaus onnistui, tervetuloa ", response.data.name);
                        setLogIn(true);
                    } else {
                        changeWrongPassword(true);
                    }       
                }
            })
            changeSubmit(false);
        }
    }


    // function createAccount() {
    //     changeCreateNewAccount(true);
    // }

    return (
        <div className="signInComponent">
             <h2> Sign in: </h2>
            
            <Form className="signInForm">
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={event => setUserName(event.target.value)}/>
                    {submit && !userName ?
                    <Form.Text className="alertText" style={{textAlign: 'left'}}>
                        Enter your username
                    </Form.Text>
                    : null
                    }
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                    { submit && !password ?
                    <Form.Text className="alertText">
                        Enter your password
                    </Form.Text>
                    : null
                    }
                </Form.Group>
                {wrongPassword && 
                    <Form.Label style={{color:'red', textAlign:'left', marginBottom: '1rem'}}>
                        Wrong username or password
                    </Form.Label>}
                <Button variant="success" onClick={() => signIn()}>
                    Submit
                </Button>
                <p>Or create a new account <u onClick={() => changeCreateNewAccount(true)}>here</u> </p>
            </Form>
        </div>
    )
}

export { SignInForm }