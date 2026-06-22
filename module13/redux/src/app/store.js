import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/countrSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer 
    }
})