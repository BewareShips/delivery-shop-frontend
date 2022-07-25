import { productSlice } from "./slices/productSlice";
import {configureStore}  from "@reduxjs/toolkit";
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer:{
    products: productSlice.reducer,
    cart
  }
})