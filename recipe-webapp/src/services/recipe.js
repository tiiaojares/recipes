import axios from 'axios';

const baseUrl = '/recipes'

const createRecipe = (newRecipe) => {
    return axios.post(baseUrl, newRecipe);
}

export default { createRecipe }