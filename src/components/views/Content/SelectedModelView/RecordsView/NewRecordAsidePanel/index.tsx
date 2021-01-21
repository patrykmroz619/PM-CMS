import React from "react";
import AsidePanel from "../../AsidePanel";
import RecordForm from "./RecordForm";

type NewRecordAsidePanelProps = {
  visible: boolean;
  close: () => void;
  fields: ContentField[];
};

const NewRecordAsidePanel = ({ visible, close, fields }: NewRecordAsidePanelProps) => {
  return (
    <AsidePanel visible={visible} close={close}>
      <RecordForm fields={fields} closePanel={close} />
    </AsidePanel>
  );
};

export default NewRecordAsidePanel;
