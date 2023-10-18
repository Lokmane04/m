import { configureStore } from "@reduxjs/toolkit";

import { categoriesSliceReducer } from "./features/categoriesSlice/categoriesSlice";
import { tasksSliceReducer } from "./features/tasksSlice/tasksSlice";
import { filteredTasksSliceReducer } from "./features/categoriesFilterSlice/categoriesFilterSlice";
const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
    categories: categoriesSliceReducer,
    filteredTasks: filteredTasksSliceReducer,
  },
});

export default store;
