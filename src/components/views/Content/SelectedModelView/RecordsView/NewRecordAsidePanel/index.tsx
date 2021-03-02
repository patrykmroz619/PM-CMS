import React from "react";
import { useSelector } from "react-redux";

import { addRecord } from "@api/records";
import { currentProjectSelector } from "@selectors";
import { currentProjectActions } from "@actions";
import { useNotification } from "@hooks";
import { contentModelsPage as content } from "@content";

import { AsidePanel, RecordForm } from "@common";

type NewRecordAsidePanelProps = {
  visible: boolean;
  close: () => void;
  fields: ContentField[];
};

const NewRecordAsidePanel = ({ visible, close, fields }: NewRecordAsidePanelProps) => {
  const contentModelId = useSelector(currentProjectSelector.selectedModelId);
  const { success } = useNotification();

  const onSubmitSuccess = () => {
    success(content.addRecordSuccessNotification);
  };

  return (
    <AsidePanel visible={visible} close={close}>
      <RecordForm
        fields={fields}
        closePanel={close}
        apiCall={addRecord}
        reduxAction={currentProjectActions.addRecord}
        paramId={contentModelId || ""}
        onSubmitSuccess={onSubmitSuccess}
      />
    </AsidePanel>
  );
};

export default NewRecordAsidePanel;
