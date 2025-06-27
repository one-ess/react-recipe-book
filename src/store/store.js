import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./category/category.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
