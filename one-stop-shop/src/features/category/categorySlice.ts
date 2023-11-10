import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../app/models/category";


interface CategoryState {
  category: Category | null;
}

const initialState: CategoryState = {
  categories = [],
};

export const getCategories = createAsyncThunk("category",async() => const response = await fetch()
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state,action) => {
        state.category = action.payload;
    })
  },
});
