import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartContentAmount: 0,
  cartContentAmountLimit: 10,
  cartedProducts: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increaseCart: (state) => {
      state.cartContentAmount = state.cartContentAmount + 1;
    },
    addProduct: (state, action) => {
        var found = false
        state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          var count = product.count
          count = count + 1
          delete product.count
          product.count = count
          found = true
        }
      })
      if (found !== true){
        action.payload.count = 1
        state.cartedProducts.push(action.payload)
      }
    },
    decreaseCart: (state, action) => {
      state.cartContentAmount = state.cartContentAmount - 1;
      state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          var count = product.count
          count = count - 1
          delete product.count
          product.count = count
        }
      })
    },
    deleteProduct: (state, action) => {
      if(action.payload.count === 1){
        state.cartContentAmount = state.cartContentAmount - 1;
      }else{
        state.cartContentAmount = state.cartContentAmount - action.payload.count ;
      }
      state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          state.cartedProducts.splice(index, 1)
        }
      })
    },
    
  },
});

export const {
    increaseCart,
    decreaseCart,
    deleteProduct,
    addProduct,
} = cart.actions;

export default cart.reducer;