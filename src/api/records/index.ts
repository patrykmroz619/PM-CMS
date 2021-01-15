import { endpoint } from "@api/endpoint";
import ApiWithTokenHandling from "../withTokenHandling";

export const getRecords = (contentModelId: string) =>
  ApiWithTokenHandling.get<GetRecordsApiResponseData>(endpoint.records + "/" + contentModelId);

export const addRecord = (contentModelId: string, recordData: RecordItem) =>
  ApiWithTokenHandling.post<RecordItem>(endpoint.records + "/" + contentModelId, recordData);

export const updateRecord = (recordId: string, recordData: RecordItem) =>
  ApiWithTokenHandling.put<RecordItem>(endpoint.records + "/" + recordId, recordData);

export const deleteRecord = (recordId: string) =>
  ApiWithTokenHandling.delete(endpoint.records + "/" + recordId);
