import { createReducer } from "@reduxjs/toolkit"



const cartReducer =createReducer({
  
    cartItems: [],
    // subTotal: 0,
    // total: 0,
    // shiping: 0,
    // tax: 0,
  
},
{
    addtoCart: (state , action) => {
            const item = action.payload;
            const isExisting = state.cartItems.find((e)=>e.id === item.id)
            if (isExisting) {
              state.cartItems.forEach((i) => {
                if (i.id === item.id) i.quantity += 1;
              });
            }
             else {
              state.cartItems.push(item);
            }
            console.log(state.cartItems);
            
    },
    
}



)
export default cartReducer