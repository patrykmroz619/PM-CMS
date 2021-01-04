import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & { label?: string };

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

const StyledCheckbox = styled.input`
  position: relative;
  width: 1px;
  margin-left: calc(${({ theme }) => theme.spacing.s});
  margin-right: calc(${({ theme }) => theme.spacing.m});

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.color.primary};
    transition: 0.3s;
    cursor: pointer;
  }

  &:checked:before {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  return (
    <Wrapper>
      <StyledCheckbox type="checkbox" id={id} {...props} />
      {label && <label htmlFor={id}>{label}</label>}
    </Wrapper>
  );
};
