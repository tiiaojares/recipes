

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dropdown from 'react-bootstrap/Dropdown';
import './pages.css'
import { setUser, store } from '../store';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    
    function logOut() {
        store.dispatch(setUser({
            id: 0, 
            name: '',
            username: '',
            password: '',
        }));
        console.log("logged out");

        navigate("/");
    }

    const navigate = useNavigate();

    return (
        <nav className="navbar form-inline" style={{paddingTop: '1rem', paddingBottom: '1rem'}} >
            <div className="container">
                <div/>
                <h3 style={{color: 'green', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '0'}}> My Own Recipes</h3>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-success btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg> 
                            <div className="hideMobile" style={{display: 'inline'}}> Menu </div>
                        </Dropdown.Toggle>
        
                        <Dropdown.Menu>
                            <Dropdown.Item  
                                className="btn btn-success btn-sm" 
                                > Search...
                            </Dropdown.Item>
                            <Dropdown.Item  
                                className="btn btn-success btn-sm" 
                                > Create new 
                            </Dropdown.Item>
                            <Dropdown.Item  
                                className="btn btn-success btn-sm" 
                                onClick={() => logOut()}>Log out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>   
        </nav> 
    )
}

export { Navbar }