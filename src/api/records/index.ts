import { endpoint } from "@api/endpoint";
import ApiWithTokenHandling from "../withTokenHandling";

export const getRecords = (contentModelId: string) =>
  ApiWithTokenHandling.get<GetRecordsApiResponseData>(endpoint.records + "/" + contentModelId);

export const addRecord = (recordData: RecordItem[], contentModelId: string) =>
  ApiWithTokenHandling.post<RecordObject>(endpoint.records + "/" + contentModelId, {
    record: recordData
  });

export const updateRecord = (recordId: string, recordData: RecordItem) =>
  ApiWithTokenHandling.put<RecordItem>(endpoint.records + "/" + recordId, recordData);

export const deleteRecord = (recordId: string) =>
  ApiWithTokenHandling.delete(endpoint.records + "/" + recordId);
