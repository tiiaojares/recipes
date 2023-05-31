
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, store } from '../store';
import Button from 'react-bootstrap/Button';

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
            
            <div className="container"> 
                <nav className="navbar">
                
                <p 
                   
                    style={{textAlign:'center'}}>
                    My Own Recepies
                </p>
                <Button
                    onClick={() => logOut()}
                    style={{textAlign: 'right'}}>
                    Log out
                </Button>
            
                </nav>    
            </div>
        )
    }
    
}

export { MainPage }