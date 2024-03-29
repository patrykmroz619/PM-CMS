import { endpoint } from "@api/endpoint";
import apiWithTokenHandling from "@api/withTokenHandling";

export const getProjects = () =>
  apiWithTokenHandling.get<GetProjectsApiResponseData>(endpoint.projects);

export const getProjectById = (id: string) =>
  apiWithTokenHandling.get<Project>(endpoint.projects + `/${id}`);

export const addProject = (data: NewProjectFormData) =>
  apiWithTokenHandling.post<Project>(endpoint.projects, data);

export const updateProject = (data: Partial<Project>, id: string) =>
  apiWithTokenHandling.patch<Project>(endpoint.projects + `/${id}`, data);

export const deleteProject = (id: string) =>
  apiWithTokenHandling.delete<void>(endpoint.projects + `/${id}`);

export const generateApiKey = (id: string) =>
  apiWithTokenHandling.post<{ apiKey: string }>(endpoint.apiKey + `/${id}`);
