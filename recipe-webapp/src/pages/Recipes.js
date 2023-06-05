
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { setRecipes, store } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './pages.css'
import { Navbar } from './Navbar';
import axios from 'axios';

const RecipeTable = ({recipes}) => {
    const navigate = useNavigate();
    
    return (
        recipes.map(r => 
            <tr key={ r.id }>
                <td 
                onClick={() => navigate("/recipes/"+r.id)}
                className="recipeTitle"
                style={{width: '40%'}}> { r.title } </td>
                <td style={{fontStyle: 'italic'}}> { r.description } </td>
            </tr>
        )
    )
}

const Recipes = () => {
    let user = useSelector(state => state.recipeReducer.user);
    let id = user.id;
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (id === 0) {
            navigate("/");
        } else {
            axios.get("/recipes/user/"+id).then(response => {
                console.log("response: ", response.data)
                setRecipes(response.data);
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
                <Navbar text={"Omat reseptit"} />
                <div className="container">
                    <div className="table-responsive recipeTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"> Otsikko </th> 
                                <th scope="col"> Kuvaus </th> 
                            </tr>
                        </thead>
                        <tbody>
                            <RecipeTable recipes={recipes} />
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
    
}

export { Recipes }