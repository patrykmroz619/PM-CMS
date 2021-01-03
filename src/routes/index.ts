const routes = {
  login: "/login",
  register: "/register",
  panel: "/panel",
  projects: "/panel/projects",
  newProject: "/panel/projects/add",
  content: "/panel/content",
  newContentModel: "/panel/content/add",
  profile: "/panel/profile",
  media: "/panel/media",
  settings: "/panel/settings",
  logout: "/panel/logout"
} as const;

export default routes;
