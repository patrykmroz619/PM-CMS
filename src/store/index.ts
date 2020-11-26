import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

const state = store.getState();

export type RootState = typeof state;
export default store;
