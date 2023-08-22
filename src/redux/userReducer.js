import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    userToken: null,
  },

  {
    // --------- LOGIN ----------

    login: (state, action) => {
      const token = action.payload;
      state.userToken = token;
    //   console.log(token);

      localStorage.setItem("userToken", token);
    },


    logout: (state) => {
      state.userToken = null;
      
      localStorage.removeItem("userToken");
    },
  }
);