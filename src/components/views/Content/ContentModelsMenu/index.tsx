import { currentProjectActions } from "@actions";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Menu from "./Menu";

export type ContentModelsMenuProps = {
  contentModels: ContentModel[];
  selectedModelId: string;
};

const ContentModelsMenu = (props: ContentModelsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const selectModel = useCallback((id: string) => {
    dispatch(currentProjectActions.selectModel(id));
  }, []);

  const toogleMenu = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return <Menu {...props} selectModel={selectModel} isOpen={isOpen} toogleMenu={toogleMenu} />;
};

export default ContentModelsMenu;
