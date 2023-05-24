import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const NewAccountForm = ({createNewAccountSuccess}) => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [submit, changeSubmit] = useState(false);
    const [falsePassword, changeFalsePassword] = useState(false);


    function createAccount() {
        if (name && userName && password1 && password2) {
            if (password1 === password2) {
                createNewAccountSuccess();
               
            } else {
                changeFalsePassword(true);
                changeSubmit(false);
            }
        } else {
            changeSubmit(true);
        }  
    }


    return (
       
        <div className="signInComponent">   
             <h2> Create a new account: </h2>
            <Form className="signInForm">

                { falsePassword && 
                    <Form.Label style={{color:'red'}}>
                        The password and its confirmation do not match...
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

                <Button variant="success" onClick={() => createAccount()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export { NewAccountForm }