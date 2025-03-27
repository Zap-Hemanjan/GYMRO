// src/redux/exerciseDetailSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exerciseDetail: {},
  exerciseVideos: [],
  targetMuscleExercises: [],
  equipmentExercises: [],
};

const exerciseDetailSlice = createSlice({
  name: "exerciseDetail",
  initialState,
  reducers: {
    setExerciseDetail: (state, action) => {
      state.exerciseDetail = action.payload;
    },
    setExerciseVideos: (state, action) => {
      state.exerciseVideos = action.payload;
    },
    setTargetMuscleExercises: (state, action) => {
      state.targetMuscleExercises = action.payload;
    },
    setEquipmentExercises: (state, action) => {
      state.equipmentExercises = action.payload;
    },
  },
});

export const {
  setExerciseDetail,
  setExerciseVideos,
  setTargetMuscleExercises,
  setEquipmentExercises,
} = exerciseDetailSlice.actions;

export default exerciseDetailSlice.reducer;
