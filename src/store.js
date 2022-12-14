import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./pages/categories/categorySlice";
import userSlice from "./pages/register/SignInUpSlice";
import systemSlice from "./systemState/systemSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    user: userSlice,
    systemSlice: systemSlice,
  },
});

export default store;
