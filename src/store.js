import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./pages/categories/categorySlice";
import userSlice from "./pages/register/SignInUpSlice";
import systemSlice from "./systemState/systemSlice";
import productSlice from "./pages/products/ProductSlice";
import cartSlice from "./pages/cart/CartSlice";
const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    user: userSlice,
    systemSlice: systemSlice,
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
