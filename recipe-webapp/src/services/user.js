
import axios from 'axios';

const baseUrl = '/user'

const createUser = (newUser) => {
    return axios.post(baseUrl, newUser);
}

export default { createUser }