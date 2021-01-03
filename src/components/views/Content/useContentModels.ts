import { currentProjectSelector } from "@selectors";
import { useSelector } from "react-redux";

import currentProjectSelectors from "store/selectors/currentProjectSelectors";

type UseContentModelType = () => [ContentModel | undefined, ContentModel[], boolean];

const useContentModels: UseContentModelType = () => {
  const contentModels = useSelector(currentProjectSelectors.contentModels);
  let selectedModelId = useSelector(currentProjectSelectors.selectedModelId);
  const loading = useSelector(currentProjectSelector.loading);

  let selectedModel = null;
  if (selectedModelId) {
    selectedModel = contentModels.find((model) => model.id === selectedModelId);
  } else {
    selectedModel = contentModels[0];
    selectedModelId = selectedModel?.id;
  }

  return [selectedModel, contentModels, loading];
};

export default useContentModels;
