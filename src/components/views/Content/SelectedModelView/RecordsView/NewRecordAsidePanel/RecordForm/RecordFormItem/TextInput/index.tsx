import React from "react";
import styled from "@myStyled";

import { Input } from "@common";

type TextInputProps = {
  field: TextField;
  itemData: RecordItem;
  handleChange: (value: string, fieldName: string) => void;
};

const StyledTextArea = styled.textarea`
  padding-top: ${({ theme }) => theme.spacing.s};
  padding-bottom: ${({ theme }) => theme.spacing.s};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.color.primaryLight};
  border: none;
  resize: none;
  transition: 0.3s;
`;

const TextInput = ({ field, itemData, handleChange }: TextInputProps) => (
  <>
    <label htmlFor={field.name}>{field.name}</label>
    {field.multiline ? (
      <StyledTextArea
        id={field.name}
        minLength={field.minLength}
        maxLength={field.maxLength}
        placeholder="Multi-line text"
        value={String(itemData.value)}
        onChange={(e) => handleChange(e.target.value, field.name)}
      />
    ) : (
      <Input
        id={field.name}
        minLength={field.minLength}
        maxLength={field.maxLength}
        placeholder="Text"
        value={String(itemData.value)}
        onChange={(e) => handleChange(e.currentTarget.value, field.name)}
      />
    )}
  </>
);

export default TextInput;
