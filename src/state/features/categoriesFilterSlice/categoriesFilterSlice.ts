import { supabase } from "../../../utils/supabase/supabase.utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: "",
  filteredTasks: [],
};
const filteredTasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilteredTasks.fulfilled, (state, action: any) => {
      state.loading = false;
      state.filteredTasks = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFilteredTasks.rejected, (state, action) => {
      state.loading = false;
      state.filteredTasks = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});
export const fetchFilteredTasks = createAsyncThunk(
  "tasks/fetchFilteredTasks",
  async (category: string) => {
    let { data: tasks, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("category", category);

    return { tasks, error };
  }
);
export const filteredTasksSliceReducer = filteredTasksSlice.reducer;
