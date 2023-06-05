
import axios from 'axios';

const baseUrl = '/user'

const createUser = (newUser) => {
    return axios.post(baseUrl, newUser);
}

const updateUser = (updatedUser) => {
    return axios.put(baseUrl+"/"+updatedUser.id, updatedUser);
}

export default { createUser, updateUser }