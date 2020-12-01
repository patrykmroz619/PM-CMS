import React from "react";
import styled from "@myStyled";

interface InputWithIconProps extends React.HTMLProps<HTMLInputElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isTouched?: boolean;
  error?: string;
}

const Wrapper = styled.div<{ isError: 1 | 0 }>`
  position: relative;
  margin-bottom: ${({ theme, isError }) => (isError ? theme.spacing.s : theme.spacing.m)};

  input {
    background-color: ${({ theme, isError }) => (isError ? "#ffbbbb" : theme.color.light)};
  }
  svg {
    position: absolute;
    top: 20px;
    width: 22px;
    left: 20px;
    transform: translateY(-50%);
  }
`;

const Error = styled.p`
  margin-top: 5px;
  width: 100%;
  font-size: 10px;
  color: red;
`;

export const InputWithIcon = ({ icon: Icon, isTouched, error, ...props }: InputWithIconProps) => (
  <Wrapper isError={error && isTouched ? 1 : 0}>
    <input {...props} data-testid="input" />
    {isTouched && error ? <Error>{error}</Error> : null}
    <Icon />
  </Wrapper>
);
