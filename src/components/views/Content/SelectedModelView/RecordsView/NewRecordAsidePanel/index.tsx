import React from "react";
import { useSelector } from "react-redux";

import { addRecord } from "@api/records";
import { currentProjectActions } from "@actions";
import { AsidePanel, RecordForm } from "@common";
import { currentProjectSelector } from "@selectors";

type NewRecordAsidePanelProps = {
  visible: boolean;
  close: () => void;
  fields: ContentField[];
};

const NewRecordAsidePanel = ({ visible, close, fields }: NewRecordAsidePanelProps) => {
  const contentModelId = useSelector(currentProjectSelector.selectedModelId);
  return (
    <AsidePanel visible={visible} close={close}>
      <RecordForm
        fields={fields}
        closePanel={close}
        apiCall={addRecord}
        reduxAction={currentProjectActions.addRecord}
        paramId={contentModelId || ""}
      />
    </AsidePanel>
  );
};

export default NewRecordAsidePanel;
