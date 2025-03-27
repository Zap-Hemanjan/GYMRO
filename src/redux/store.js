// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./exerciseSlice";
import uiReducer from "./uiSlice";
import exerciseDetailReducer from "./exerciseDetailSlice";

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    ui: uiReducer,
    exerciseDetail: exerciseDetailReducer,
  },
});

export default store;
