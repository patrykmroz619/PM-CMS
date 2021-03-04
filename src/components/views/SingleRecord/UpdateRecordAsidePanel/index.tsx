import React from "react";

import { updateRecord } from "@api/records";
import { currentProjectActions } from "@actions";
import { RecordForm } from "@common";

import * as S from "./styled";

type UpdateRecordAsidePanelProps = {
  visible: boolean;
  close: () => void;
  fields: ContentField[];
  record: RecordObject;
};

const UpdateRecordAsidePanel = ({
  visible,
  close,
  fields,
  record
}: UpdateRecordAsidePanelProps) => {
  const nestedRecordItemsCopy = JSON.parse(JSON.stringify(record.data)) as RecordItem[];
  return (
    <S.AsidePanel visible={visible} close={close}>
      <RecordForm
        fields={fields}
        closePanel={close}
        apiCall={updateRecord}
        reduxAction={currentProjectActions.updateRecord}
        recordItems={nestedRecordItemsCopy}
        paramId={record.id}
      />
    </S.AsidePanel>
  );
};

export default UpdateRecordAsidePanel;
