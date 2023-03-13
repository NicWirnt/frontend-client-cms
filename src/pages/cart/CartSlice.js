import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setToCart: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item._id === payload._id);
      if (existingItem) {
        existingItem.cartQty += 1;
        state.cartTotal += 1;
      } else {
        state.cart = [...state.cart, { ...payload, cartQty: 1 }];
        state.cartTotal += 1;
      }
    },
  },
});

const { actions, reducer } = cartSlice;

export const { setToCart } = actions;

export default reducer;
