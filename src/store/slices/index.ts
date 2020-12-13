import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import projectsSlice from "./projectsSlice";
import currentProjectSlice from "./currentProjectSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  projects: projectsSlice.reducer,
  currentProject: currentProjectSlice.reducer
});

export default rootReducer;
