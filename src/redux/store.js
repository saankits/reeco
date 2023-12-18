import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./mySlice"

export const store = configureStore({
    reducer:{
        cartslice : cartReducer
    }
}) 