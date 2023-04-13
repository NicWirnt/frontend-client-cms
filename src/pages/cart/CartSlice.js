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
    decreaseFromCart: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item._id === payload._id);
      existingItem = -1;
      state.cartTotal = -1;
    },
    removeFromCart: (state, { payload }) => {},
  },
});

const { actions, reducer } = cartSlice;

export const { setToCart, decreaseFromCart, removeFromCart } = actions;

export default reducer;
