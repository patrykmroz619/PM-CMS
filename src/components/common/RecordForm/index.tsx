import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AxiosPromise } from "axios";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { useSubmitAndDispatch } from "@hooks";

import RecordFormItem from "./RecordFormItem";
import { Button, Spinner } from "@common";
import { currentProjectSelector } from "@selectors";
import * as S from "./styled";

type RecordFormProps = {
  fields: ContentField[];
  closePanel: () => void;
  recordItems?: RecordItem[];
  apiCall: (recordData: RecordItem[], contentModelId: string) => AxiosPromise<RecordObject>;
  reduxAction: ActionCreatorWithPayload<RecordObject>;
  paramId: string;
};

const getItemData = (fieldName: string, recordItems: RecordItem[]) =>
  recordItems.find((item) => item.name === fieldName) || { name: fieldName, value: "" };

export const RecordForm = ({
  fields,
  closePanel,
  apiCall,
  reduxAction,
  paramId,
  recordItems = []
}: RecordFormProps) => {
  const [recordFormData, setRecordFormData] = useState<RecordItem[]>(recordItems);

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
    if (recordItems.length == 0) {
      setRecordFormData([]);
    }
    closePanel();
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(apiCall, reduxAction, handleClose);

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
