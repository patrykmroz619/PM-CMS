const routes = {
  login: "/login",
  register: "/register",
  panel: "/panel",
  projects: "/panel/projects",
  newProject: "/panel/new-project",
  content: "/panel/content",
  newContentModel: "/panel/new-content-model",
  records: "/panel/content/records",
  singleRecord: "/panel/records/:id",
  modelFields: "/panel/content/fields",
  profile: "/panel/profile",
  media: "/panel/media",
  settings: "/panel/settings",
  logout: "/panel/logout"
} as const;

export default routes;
