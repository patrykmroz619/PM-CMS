import { useState } from "react";
import { useDispatch } from "react-redux";

import { addProject } from "@api/projects";
import { projectsActions } from "@actions";

const { add } = projectsActions;

const useHandleSubmit = (): [boolean, string, (data: NewProjectFormData) => void] => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (data: NewProjectFormData) => {
    try {
      setPending(true);
      setError("");
      const response = await addProject(data);
      const newProject = response.data;

      dispatch(add(newProject));
    } catch (e) {
      const error = e?.response.data.error.description;
      if (error) {
        setError(e.response.data.error.description);
      } else {
        setError("Something went wrong. Pleasy try again later.");
      }
    } finally {
      setPending(false);
    }
  };

  return [pending, error, handleSubmit];
};

export default useHandleSubmit;
