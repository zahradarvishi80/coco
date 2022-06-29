import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    listEngaded: [],
    listFollowers:[]
}
export const apiSlice=createSlice({

    name:'api',
    initialState,
    reducers:{
     setEngaded:(state,action)=>{
         state.listEngaded = action.payload
        
     },
     setFollowers:(state,action)=>{
        state.listFollowers=action.payload
     }
    }
})
export const { setEngaded ,setFollowers} =apiSlice.actions
export default apiSlice.reducer