import axios from 'axios';

const baseUrl = '/recipes'

const createRecipe = (newRecipe) => {
    return axios.post(baseUrl, newRecipe);
}

const getRecipe = (id) => {
    return axios.get(baseUrl+"/"+id)
}

export default { createRecipe, getRecipe }