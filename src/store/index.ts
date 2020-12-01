import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

const store = configureStore({
  reducer: rootReducer
});

const state = store.getState();

export type RootState = typeof state;
export default store;
