import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./pasteSlice"; // Ensure the correct path

export const store = configureStore({
  reducer: {
    paste: pasteReducer, // This must match `state.paste`
  },
});
