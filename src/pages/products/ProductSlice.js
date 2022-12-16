import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const { setProducts, setSelectedProduct } = actions;

export default reducer;
