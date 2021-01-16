import React, { useRef, useState } from "react";

import { useDetectOutsideClick } from "@hooks";

import ArrowIcon from "@assets/arrow.svg";
import * as S from "./styled";

type SelectProps = {
  values: string[];
  handleChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

export const DropDown = ({
  values,
  handleChange,
  defaultValue,
  placeholder,
  className
}: SelectProps) => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || null);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => setMenuVisibility(false);
  useDetectOutsideClick(dropDownRef, handleOutsideClick);

  const handleOptionClick = (value: string) => {
    handleChange(value);
    setSelectedValue(value);
    setMenuVisibility(false);
  };

  const handleTogglerClick = () => setMenuVisibility((prevState) => !prevState);

  return (
    <S.Container ref={dropDownRef} className={className}>
      <S.Toggler onClick={handleTogglerClick}>
        {selectedValue || placeholder}
        <ArrowIcon />
      </S.Toggler>

      {isMenuVisible && (
        <S.Menu>
          {values.map((value) => (
            <S.Option
              key={value}
              selected={value === selectedValue}
              onClick={() => handleOptionClick(value)}
            >
              {value}
            </S.Option>
          ))}
        </S.Menu>
      )}
    </S.Container>
  );
};
