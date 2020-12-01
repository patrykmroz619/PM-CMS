import React from "react";
import styled from "@myStyled";

import logo from "@assets/logo-light.png";

const StyledAuthForm = styled.form<{ loading: 1 | 0 }>`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 450px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.darkOpacity};
  border-radius: 15px;
  transform: translate(-50%, -50%);

  * {
    transition: 0.3s;
    opacity: ${({ loading }) => (loading ? 0.5 : 1)};
  }

  img {
    display: block;
    margin: auto;
    margin-bottom: ${({ theme }) => theme.spacing.l};
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

  p.error {
    margin: ${({ theme }) => theme.spacing.s};
    font-weight: normal;
    color: red;
  }
`;

type AuthFormProps = React.HTMLAttributes<HTMLFormElement> & { loading: 1 | 0 };

export const AuthForm = React.memo(({ children, ...props }: AuthFormProps) => (
  <StyledAuthForm {...props} data-testid="form">
    <img src={logo} alt="PM - CMS logo" data-testid="img" />
    {children}
  </StyledAuthForm>
));
