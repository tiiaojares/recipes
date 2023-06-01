
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { setRecipes, store } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './pages.css'
import { Navbar } from './Navbar';
import axios from 'axios';

const MainPage = () => {
    let user = useSelector(state => state.recipeReducer.user);
    let id = user.id;
    const [recipesFromStore, setRecipesFromStore] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (id === 0) {
            navigate("/");
        } else {
            axios.get("/recipes/user/"+id).then(response => {
                console.log("response: ", response.data)
                store.dispatch(setRecipes(response.data));
                setRecipesFromStore(response.data);
                if(!response.data) return;
            })
            .catch(error => {
                console.log(error)
            });
        }
    }, [id]);



    if (id !== 0) {
        return (
           
            <div className="userBackroung">
                <Navbar />
                <div className="container">
                    <div > 
                    </div>
                </div>
            </div>
        )
    }
    
}

export { MainPage }