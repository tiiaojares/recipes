
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, store } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './pages.css'
import { Navbar } from './Navbar';

const MainPage = () => {
    let user = useSelector(state => state.userReducer.user);
    let id = user.id;
    console.log(id);

    const navigate = useNavigate();



    if (id === 0) {
        navigate("/")
        return;
        
    } else {
        return (
           
            <div className="userBackroung">
                <Navbar />
                <div>
                    <div className="container"> 
                    </div>
                </div>
            </div>
        )
    }
    
}

export { MainPage }