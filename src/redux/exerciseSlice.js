// src/redux/exerciseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
  bodyPart: "all",
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
    setBodyPart: (state, action) => {
      state.bodyPart = action.payload;
    },
  },
});

export const { setExercises, setBodyPart } = exerciseSlice.actions;
export default exerciseSlice.reducer;
