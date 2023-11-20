import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterValue",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reload: (state) => {
      state.count = 0;
    },
    addValue: (state, action) => {
      state.count += action.payload;
    },
    multiplyValue: (state, action) => {
      state.count *= action.payload;
    },
    divisionValue: (state, action) => {
      state.count /= action.payload;
    },
    exponentiationValue: (state, action) => {
      state.count = Math.pow(action.payload, 2);
    },
    squareValue: (state, action) => {
      state.count = Math.sqrt(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  reload,
  addValue,
  multiplyValue,
  divisionValue,
  exponentiationValue,
  squareValue,
  textarea,
} = counterSlice.actions;

export default counterSlice.reducer;
