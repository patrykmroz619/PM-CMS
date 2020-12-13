import React from "react";
import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

import Logo from "@assets/logo-light.svg";

const StyledAuthForm = styled.form<{ loading: 1 | 0 }>`
  margin: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.m};
  max-width: 450px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.darkOpacity};
  border-radius: 15px;

  ${media(breakpoints.mobile.m)} {
    padding: ${({ theme }) => theme.spacing.xl};
    margin: ${({ theme }) => theme.spacing.m};
  }

  ${media(breakpoints.mobile.xl)} {
    margin: auto;
    width: 100%;
  }

  * {
    transition: 0.3s;
    opacity: ${({ loading }) => (loading ? 0.5 : 1)};
  }

  .logo {
    display: block;
    margin: auto;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    width: 100px;

    ${media(breakpoints.mobile.m)} {
      margin-bottom: ${({ theme }) => theme.spacing.l};
      width: 130px;
    }
  }

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.s};
    font-size: 24px;
    color: ${({ theme }) => theme.color.light};
    ${media(breakpoints.mobile.m)} {
      margin-bottom: ${({ theme }) => theme.spacing.m};
      font-size: 30px;
      margin-bottom: ${({ theme }) => theme.spacing.l};
    }
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
    <Logo className="logo" />
    {children}
  </StyledAuthForm>
));
