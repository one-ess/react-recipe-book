import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setActiveCategory } from "../category/category.slice";

const initialState = {
  meals: [],
  isLoadingMeals: false,
  error: null,
};

export const getMeals = createAsyncThunk("meals/fetchMeals", async (category, thunkAPI) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    thunkAPI.dispatch(setActiveCategory(category));
    return response.data.meals;
  } catch {
    return thunkAPI.rejectWithValue("Не удалось выполнить запрос");
  }
});

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeals.pending, (state) => {
      state.isLoadingMeals = true;
    });
    builder.addCase(getMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoadingMeals = false;
    });
    builder.addCase(getMeals.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoadingMeals = false;
    });
  },
});

export default mealsSlice.reducer;
