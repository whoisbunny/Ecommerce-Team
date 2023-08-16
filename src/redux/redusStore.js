import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const reduxStore = configureStore({
    reducer:cartReducer,


})
export default reduxStore;