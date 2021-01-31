import { endpoint } from "@api/endpoint";
import ApiWithTokenHandling from "../withTokenHandling";

export const getRecords = (contentModelId: string) =>
  ApiWithTokenHandling.get<GetRecordsApiResponseData>(endpoint.records + "/" + contentModelId);

export const addRecord = (recordData: RecordItem[], contentModelId: string) =>
  ApiWithTokenHandling.post<RecordObject>(endpoint.records + "/" + contentModelId, {
    record: recordData
  });

export const updateRecord = (recordData: RecordItem[], recordId: string) =>
  ApiWithTokenHandling.put<RecordObject>(endpoint.records + "/" + recordId, { record: recordData });

export const deleteRecord = (recordId: string) =>
  ApiWithTokenHandling.delete(endpoint.records + "/" + recordId);
