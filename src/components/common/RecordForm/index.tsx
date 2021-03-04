import React, { useState } from "react";
import { AxiosPromise } from "axios";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { useSubmitAndDispatch } from "@hooks";

import RecordFormItem from "./RecordFormItem";
import { Button, Spinner } from "@common";
import * as S from "./styled";

type RecordFormProps = {
  fields: ContentField[];
  closePanel: () => void;
  recordItems?: RecordItem[];
  apiCall: (recordData: RecordItem[], contentModelId: string) => AxiosPromise<RecordObject>;
  reduxAction: ActionCreatorWithPayload<RecordObject>;
  paramId: string;
  onSubmitSuccess?: () => void;
};

const getDefaultValue = (fieldType: FieldType) => {
  switch (fieldType) {
    case "boolean":
      return false;
    case "color":
      return "#000000";
    default:
      return "";
  }
};

const createInitialState = (fields: ContentField[]) =>
  fields.map((field) => ({ name: field.name, value: getDefaultValue(field.type) }));

const getItemData = (fieldName: string, recordItems: RecordItem[]) =>
  recordItems.find((item) => item.name === fieldName) || { name: fieldName, value: "" };

export const RecordForm = ({
  fields,
  closePanel,
  apiCall,
  reduxAction,
  paramId,
  recordItems,
  onSubmitSuccess
}: RecordFormProps) => {
  const initialState = recordItems ? recordItems : createInitialState(fields);

  const [recordFormData, setRecordFormData] = useState<RecordItem[]>(initialState);

  const handleChange = (value: string | number | boolean, fieldName: string) => {
    setRecordFormData((prevState) => {
      const stateCopy = [...prevState];
      const correspondingFormItem = stateCopy.find((item) => item.name === fieldName);
      if (correspondingFormItem) {
        correspondingFormItem.value = value;
        return stateCopy;
      } else {
        return [...prevState, { name: fieldName, value }];
      }
    });
  };

  const handleClose = () => {
    if (recordItems) {
      setRecordFormData([]);
    }
    closePanel();
  };

  const onSuccess = () => {
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }

    handleClose();
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(apiCall, reduxAction, onSuccess);

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClose();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(recordFormData, paramId);
  };

  const formItems = fields.map((field) => (
    <RecordFormItem
      key={field.id}
      field={field}
      itemData={getItemData(field.name, recordFormData)}
      handleChange={handleChange}
    />
  ));

  if (pending) return <Spinner />;

  return (
    <S.Form onSubmit={handleFormSubmit}>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {formItems}
      <Button type="submit">Submit</Button>
      <S.CancelButton secondary onClick={handleCancelClick}>
        Cancel
      </S.CancelButton>
    </S.Form>
  );
};
