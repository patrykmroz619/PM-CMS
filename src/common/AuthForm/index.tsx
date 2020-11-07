import React from "react";
import styled from "@myStyled";

import logo from "@assets/logo-light.png";

const StyledAuthForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.xl};
  width: 450px;
  background-color: ${({ theme }) => theme.color.darkOpacity};
  border-radius: 15px;
  text-align: center;

  img {
    display: block;
    margin: auto;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    width: 130px;
  }

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.m};
    font-size: 30px;
    color: ${({ theme }) => theme.color.light};
  }

  input {
    padding: ${({ theme }) => theme.spacing.s};
    padding-left: 60px;
    width: 100%;
    height: ${({ theme }) => theme.sizing.inputsHeight};
    background-color: ${({ theme }) => theme.color.light};
    border: none;
  }
`;

export const AuthForm: React.FC<React.HTMLAttributes<HTMLFormElement>> = ({
  children,
  ...props
}) => (
  <StyledAuthForm {...props}>
    <img src={logo} alt="PM - CMS logo" />
    {children}
  </StyledAuthForm>
);
