// src/redux/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = uiSlice.actions;
export default uiSlice.reducer;
