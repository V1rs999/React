import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import notesReducer from "./notesSlice";

export const store = configureStore({
  reducer: {
    counterValue: counterReducer,
    notes: notesReducer, // додано редуктор для notes у сховище
  },
});
