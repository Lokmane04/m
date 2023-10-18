import { CategoriesSliceTypes } from "./../../../types/Categories";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useGetCategories from "../../../hooks/supabase/useGetCategories";
const initialState: CategoriesSliceTypes = {
  loading: false,
  error: "",
  categories: [],
};
export const fetchCategories = createAsyncThunk("tasks/fetchCategories", () => {
  const categories = useGetCategories();
  return categories;
});
const categoriesSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action: any) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});
export const categoriesSliceReducer = categoriesSlice.reducer;
