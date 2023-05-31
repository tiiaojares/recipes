import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState={
    user: {
        Id: 0,
        name: "",
        username: "",
        password: "",
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user=action.payload;
        },
    }
});



export const { setUser } = userSlice.actions;
export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer
    }
})