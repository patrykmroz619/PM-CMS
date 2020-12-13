import { endpoint } from "@api/endpoint";
import apiWithTokenHandling from "@api/withTokenHandling";

export const getProjects = () =>
  apiWithTokenHandling.get<GetProjectsApiResponseData>(endpoint.projects);

export const getProjectById = (id: string) =>
  apiWithTokenHandling.get<Project>(endpoint.projects + `/${id}`);

export const addProject = (project: Project) =>
  apiWithTokenHandling.post<Project>(endpoint.projects, project);

export const updateProject = (id: string, data: Partial<Project>) =>
  apiWithTokenHandling.put<Project>(endpoint.projects + `/${id}`, data);

export const deleteProject = (id: string) =>
  apiWithTokenHandling.delete<void>(endpoint.projects + `/${id}`);
