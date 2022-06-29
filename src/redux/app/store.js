import { configureStore } from "@reduxjs/toolkit";
// import apiReducer from "../../features/api/apiSlice"
import apiReducer from "../api/apiSlice";

export const store=configureStore({
    reducer:{
        api:apiReducer
    },
})