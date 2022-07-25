import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   products: [],
};

export const getProducts = createAsyncThunk(
   "products/getProducts",
   async () => {
      const {data} = await axios.get("http://localhost:5000/api/products");
      return data
   }
);

export const productSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.products = action.payload;
      },
   },
   extraReducers: {
      [getProducts.pending]: (state) => {
         state.status = "loading";
         state.products = [];
      },
      [getProducts.fulfilled]: (state, action) => {
         console.log(action, "fulfilled");
         state.products = action.payload;
         state.status = "success";
      },
      [getProducts.rejected]: (state, action) => {
         console.log(action, "rejected");
         state.status = "error";
         state.products = [];
      },
   },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
