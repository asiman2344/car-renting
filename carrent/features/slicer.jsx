import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        searchQuery: ''
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
        },
        logout: (state, action) => {
            state.isLogin = false;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        clearSearchQuery: (state) => {
            state.searchQuery = '';
        }
    }
})

export const { login, logout, setSearchQuery, clearSearchQuery } = loginSlice.actions;
export default loginSlice.reducer;