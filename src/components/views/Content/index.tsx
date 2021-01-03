import { Spinner } from "@common";
import React from "react";

import ContentModelsMenu from "./ContentModelsMenu";
import LackOfContentModelMessage from "./LackOfContentModelMessage";
import SelectedModelView from "./SelectedModelView";
import useContentModels from "./useContentModels";

const ContentView = () => {
  const [selectedModel, contentModels, loading] = useContentModels();

  if (loading) return <Spinner />;
  if (!selectedModel) return <LackOfContentModelMessage />;

  return (
    <>
      <ContentModelsMenu contentModels={contentModels} selectedModelId={selectedModel.id} />
      <SelectedModelView model={selectedModel} />
    </>
  );
};

export default ContentView;
