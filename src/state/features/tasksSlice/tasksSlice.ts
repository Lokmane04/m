import { supabase } from "../../../utils/supabase/supabase.utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: "",
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action: any) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.tasks = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  return { tasks, error };
});
export const tasksSliceReducer = tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;
