import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:'login',
    initialState:{
        isLogin:false,
    },
    reducers:{
        login:(state,action)=>{
            state.isLogin=true;
        },
        logout:(state,action)=>{
            state.isLogin=false;
        }
    }
})

export const {login,logout}=loginSlice.actions;
export default loginSlice.reducer;