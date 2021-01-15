import { endpoint } from "@api/endpoint";
import apiWithTokenHandling from "@api/withTokenHandling";

export const addField = (data: ContentFieldFormData, contentModelId: string) =>
  apiWithTokenHandling.post<ContentField>(endpoint.contentFields + "/" + contentModelId, data);

export const updateField = (data: ContentFieldFormData, contentModelId: string) =>
  apiWithTokenHandling.put<ContentField>(endpoint.contentFields + "/" + contentModelId, data);

export const deleteField = (fieldId: string, contentModelId: string) =>
  apiWithTokenHandling.delete(endpoint.contentFields + "/" + contentModelId, {
    data: {
      id: fieldId
    }
  });
