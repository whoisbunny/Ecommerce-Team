import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer,
    product : productReducer,
  },
});
export default reduxStore;