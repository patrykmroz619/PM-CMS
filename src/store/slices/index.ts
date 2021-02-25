import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import projectsSlice from "./projectsSlice";
import currentProjectSlice from "./currentProjectSlice";
import notificationsSlice from "./notificationsSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  projects: projectsSlice.reducer,
  currentProject: currentProjectSlice.reducer,
  notifications: notificationsSlice.reducer
});

export default rootReducer;
