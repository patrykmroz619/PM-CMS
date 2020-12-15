import React from "react";
import styled from "@myStyled";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isTouched?: boolean;
  error?: string;
}

const Wrapper = styled.div<{ isError: 1 | 0 }>`
  position: relative;
  margin-bottom: ${({ theme, isError }) => (isError ? theme.spacing.s : theme.spacing.m)};
  width: 100%;

  input {
    padding-left: ${({ theme }) => theme.spacing.m};
    padding-right: ${({ theme }) => theme.spacing.m};
    width: 100%;
    height: ${({ theme }) => theme.sizing.inputsHeight};
    background-color: ${({ theme, isError }) => (isError ? "#ffbbbb" : theme.color.primaryLight)};
    border: none;
  }
`;

const Error = styled.p`
  margin-top: 5px;
  width: 100%;
  font-size: 10px;
  color: red;
`;

export const Input = ({ isTouched, error, ...props }: InputProps) => (
  <Wrapper isError={error && isTouched ? 1 : 0}>
    <input data-testId="input" {...props} data-testid="input" />
    {isTouched && error ? <Error>{error}</Error> : null}
  </Wrapper>
);
