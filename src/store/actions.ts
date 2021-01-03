import userSlice from "./slices/userSlice";
import projectsSlice from "./slices/projectsSlice";
import currentProjectSlice from "./slices/currentProjectSlice";

const userActions = userSlice.actions;
const projectsActions = projectsSlice.actions;
const currentProjectActions = currentProjectSlice.actions;

export { userActions, projectsActions, currentProjectActions };
