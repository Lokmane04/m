import { configureStore } from "@reduxjs/toolkit";

import { categoriesSliceReducer } from "./features/categoriesSlice/categoriesSlice";
import { tasksSliceReducer } from "./features/tasksSlice/tasksSlice";
const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
    categories: categoriesSliceReducer,
  },
});

export default store;
