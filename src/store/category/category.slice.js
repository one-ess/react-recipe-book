import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  activeCategory: "",
  isLoadingCategories: false,
  error: null,
};

export const getCategories = createAsyncThunk("category/fetchCategories", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    return response.data.categories;
  } catch {
    return thunkAPI.rejectWithValue("Не удалось выполнить запрос");
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoadingCategories = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoadingCategories = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoadingCategories = false;
    });
  },
});

export const { setActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
