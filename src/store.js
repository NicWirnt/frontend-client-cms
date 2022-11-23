import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./pages/categories/categorySlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});

export default store;
