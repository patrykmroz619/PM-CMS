import { endpoint } from "@api/endpoint";
import apiWithTokenHandling from "@api/withTokenHandling";

export const addField = (data: ContentFieldFormData, contentModelId: string) =>
  apiWithTokenHandling.post<ContentField>(endpoint.contentFields + "/" + contentModelId, data);
