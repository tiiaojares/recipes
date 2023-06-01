import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState={
    user: {
        id: 0,
        name: "",
        username: "",
        password: "",
    },
    recipes: {data: [{
        id: 0,
        title: "",
        description: "",
        userId: 0,
    }]
    }
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        }
    }
});



export const { setUser, setRecipes } = recipeSlice.actions;
export const store = configureStore({
    reducer: {
      recipeReducer: recipeSlice.reducer
    }
})