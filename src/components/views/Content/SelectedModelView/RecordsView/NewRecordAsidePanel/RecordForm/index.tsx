import React, { useState } from "react";

import { addRecord } from "@api/records";
import { currentProjectActions } from "@actions";
import { useSubmitAndDispatch } from "@hooks";

import RecordFormItem from "./RecordFormItem";
import { Button, Spinner } from "@common";
import { useSelector } from "react-redux";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";
import * as S from "./styled";

type RecordFormProps = {
  fields: ContentField[];
  closePanel: () => void;
};

const getItemData = (fieldName: string, recordItems: RecordItem[]) =>
  recordItems.find((item) => item.name === fieldName) || { name: fieldName, value: "" };

const RecordForm = ({ fields, closePanel }: RecordFormProps) => {
  const [recordFormData, setRecordFormData] = useState<RecordItem[]>([]);

  const handleChange = (value: string | number | boolean, fieldName: string) => {
    setRecordFormData((prevState) => {
      const copyState = [...prevState];
      const correspondingFormItem = copyState.find((item) => item.name === fieldName);
      if (correspondingFormItem) {
        correspondingFormItem.value = value;
        return copyState;
      } else {
        return [...prevState, { name: fieldName, value }];
      }
    });
  };

  const handleClose = () => {
    setRecordFormData([]);
    closePanel();
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    addRecord,
    currentProjectActions.addRecord,
    handleClose
  );

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClose();
  };

  const contentModelId = useSelector(currentProjectSelectors.selectedModelId);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contentModelId) {
      handleSubmit(recordFormData, contentModelId);
    }
  };

  const formItems = fields.map((field) => (
    <RecordFormItem
      key={field.id}
      field={field}
      itemData={getItemData(field.name, recordFormData)}
      handleChange={handleChange}
    />
  ));

  return (
    <S.Form onSubmit={handleFormSubmit}>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {pending ? <Spinner /> : formItems}
      <Button type="submit">Submit</Button>
      <S.CancelButton secondary onClick={handleCancelClick}>
        Cancel
      </S.CancelButton>
    </S.Form>
  );
};

export default RecordForm;
