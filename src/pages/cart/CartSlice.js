import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { setToCart } = actions;

export default reducer;
