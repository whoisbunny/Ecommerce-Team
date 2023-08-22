import { createReducer } from "@reduxjs/toolkit";

export  const productReducer = createReducer(
  { id: 0 },
  {
    productId: (state , action) => {
        state.id = action.payload;   
        console.log(state.id);
    }
  }
);