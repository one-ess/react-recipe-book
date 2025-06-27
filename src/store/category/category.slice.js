import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  isLoading: false,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default categorySlice.reducer;
