
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, store } from '../store';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css'

const MainPage = () => {
    let user = useSelector(state => state.userReducer.user);
    let id = user.id;
    console.log(id);

    const navigate = useNavigate();

    function logOut() {
        store.dispatch(setUser({
            id: 0, 
            name: '',
            username: '',
            password: '',
        }));
        console.log("log out, id: ", id)

        navigate("/");
    }


    if (id === 0) {
        navigate("/")
        return;
        
    } else {
        return (
           
            <div className="userBackroung">
                <nav className="navbar navbar-right" style={{paddingTop: '1rem', paddingBottom: '1rem'}} >
                    <div className="container">
                        <div/>
                        <h3 style={{color: 'green', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '0'}}> My Own Recipes</h3>
                            <Dropdown >
                                <Dropdown.Toggle className="btn btn-success btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classnAME="bi bi-list" viewBox="0 0 16 16">
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
                                        onClick={() => navigate("/")}>Log out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>   

                </nav> 
                <div>
                    <div className="container"> 
                    </div>
                </div>
            </div>
        )
    }
    
}

export { MainPage }