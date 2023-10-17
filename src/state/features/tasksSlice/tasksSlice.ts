import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: false,
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: () => {},
  },
});
