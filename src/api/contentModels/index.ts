import apiWithTokenHandling from "@api/withTokenHandling";
import { endpoint } from "@api/endpoint";

export const addContentModel = (data: NewContentModelData, projectId: string) =>
  apiWithTokenHandling.post<ContentModel>(endpoint.contentModels + "/" + projectId, data);

export const getContentModels = (projectId: string) =>
  apiWithTokenHandling.get<ContentModel[]>(endpoint.contentModels + "/" + projectId);

export const deleteContentModel = (contentModelId: string) =>
  apiWithTokenHandling.delete(endpoint.contentModels + "/" + contentModelId);
