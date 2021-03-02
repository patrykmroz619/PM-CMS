import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { generateApiKey } from "@api/projects";
import { currentProjectSelector } from "@selectors";
import { useNotification } from "@hooks";
import { currentProjectActions } from "@actions";
import { settingsPage as content } from "@content";

type UseGenerateApiKeyType = () => [boolean, () => void];

const useGenerateApiKey: UseGenerateApiKeyType = () => {
  const [pending, setPending] = useState(false);
  const currentProjectId = useSelector(currentProjectSelector.id);
  const dispatch = useDispatch();

  const { success, error } = useNotification();

  const handleSubmit = async () => {
    if (currentProjectId) {
      setPending(true);
      try {
        const response = await generateApiKey(currentProjectId);

        if (response.status == 201) {
          const { apiKey } = response.data;
          dispatch(currentProjectActions.setApiKey({ apiKey }));
          success(content.generateSuccessNotification);
        }
      } catch {
        error(content.generateErrorNotification);
      } finally {
        setPending(false);
      }
    }
  };

  return [pending, handleSubmit];
};

export default useGenerateApiKey;
