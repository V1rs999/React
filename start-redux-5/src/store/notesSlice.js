import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expressions: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addExpression: (state, action) => {
      state.expressions.push(action.payload);
    },
    removeExpression: (state, action) => {
      state.expressions.pop();
    },
  },
});

export const { addExpression, removeExpression } = notesSlice.actions;

export default notesSlice.reducer;
