import React from "react";
import { useSelector } from "react-redux";
import { currentProjectSelector } from "@selectors";
import ContentModel from "./ContentModel";

const ContentModelsList = () => {
  const contentModels = useSelector(currentProjectSelector.contentModels);

  return (
    <div>
      <ul>
        {contentModels.map((model) => (
          <ContentModel key={model.id} name={model.name} id={model.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContentModelsList;
