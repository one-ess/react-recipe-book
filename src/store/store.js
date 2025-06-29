import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./category/category.slice";
import mealsReducer from "./meals/meals.slice";
import detailsReducer from "./details/details.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    meals: mealsReducer,
    details: detailsReducer,
  },
});
