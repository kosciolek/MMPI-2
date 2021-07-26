import { configureStore } from "@reduxjs/toolkit";
import { mmpiSlice } from "./mmpi";
import { uiSlice } from "./ui";

export const store = configureStore({
  reducer: {
    [mmpiSlice.name]: mmpiSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
  },
});
