import { useMemo } from "react";
import { useSelector } from "react-redux";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";

type UseRecordViewDataType = (recordId: string) => [RecordObject | null, ContentModel | null];

export const useRecordViewData: UseRecordViewDataType = (recordId) => {
  const selectedContentModelId = useSelector(currentProjectSelectors.selectedModelId);
  const contentModels = useSelector(currentProjectSelectors.contentModels);

  const selectedModel = useMemo(
    () => contentModels.find((model) => model.id === selectedContentModelId) || null,
    [selectedContentModelId, contentModels]
  );

  const selectedRecord = useMemo(
    () => selectedModel?.records?.find((record) => record.id === recordId) || null,
    [selectedModel, recordId]
  );

  return [selectedRecord, selectedModel];
};
