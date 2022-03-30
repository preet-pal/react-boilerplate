import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./rootReducer";

export const store = configureStore({
  reducer: {
    searchReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
