import React, { useState } from "react";

import { Input } from "../Input";
import * as S from "./styled";

interface InputWithCheckboxProps extends React.HTMLProps<HTMLInputElement> {
  isTouched?: boolean;
  error?: string;
  label: string;
  reset?: () => void;
}

export const InputWithCheckbox = ({ label, reset, ...props }: InputWithCheckboxProps) => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkboxValue && reset) {
      reset();
    }
    setCheckboxValue(e.target.checked);
  };

  return (
    <>
      <S.Checkbox type="checkbox" checked={checkboxValue} onChange={handleCheckboxChange} />
      <label>{label}</label>
      <Input {...props} disabled={!checkboxValue} />
    </>
  );
};
