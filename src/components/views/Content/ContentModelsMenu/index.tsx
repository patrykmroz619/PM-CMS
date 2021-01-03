import { currentProjectActions } from "@actions";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import DescopMenu from "./DescopMenu";

export type ContentModelsMenuProps = {
  contentModels: ContentModel[];
  selectedModelId: string;
};

const ContentModelsMenu = (props: ContentModelsMenuProps) => {
  const dispatch = useDispatch();

  const selectModel = useCallback((id: string) => {
    dispatch(currentProjectActions.selectModel(id));
  }, []);

  return <DescopMenu {...props} selectModel={selectModel} />;
};

export default ContentModelsMenu;
