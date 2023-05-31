
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    let user = useSelector(state => state.userReducer.user);
    let id = user.id;
    console.log(id);

    const navigate = useNavigate();



    if (id === 0) {
        navigate("/")
    } else {
        return (
            <div> Welcome </div>
        )
    }
    
}

export { MainPage }