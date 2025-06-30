import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: [],
  isLoadingDetails: false,
  error: null,
};

export const getDetails = createAsyncThunk("details/fetchDetails", async (mealId, thunkAPI) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

    if (!response.data.meals || response.data.meals === "Invalid ID") {
      return thunkAPI.rejectWithValue("Не удалось найти детальную страницу рецепта");
    } else {
      return response.data.meals;
    }
  } catch {
    return thunkAPI.rejectWithValue("Не удалось выполнить запрос");
  }
});

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.error = null;
      state.isLoadingDetails = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.error = null;
      state.details = action.payload;
      state.isLoadingDetails = false;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoadingDetails = false;
    });
  },
});

export default detailsSlice.reducer;
