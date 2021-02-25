import userSlice from "./slices/userSlice";
import projectsSlice from "./slices/projectsSlice";
import currentProjectSlice from "./slices/currentProjectSlice";
import notificationsSlice from "./slices/notificationsSlice";

const userActions = userSlice.actions;
const projectsActions = projectsSlice.actions;
const currentProjectActions = currentProjectSlice.actions;
const notificationsActions = notificationsSlice.actions;

export { userActions, projectsActions, currentProjectActions, notificationsActions };
