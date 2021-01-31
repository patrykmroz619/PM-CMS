import { Button } from "@common";
import styled from "@myStyled";

export const Form = styled.form`
  padding: ${({ theme }) => theme.spacing.m};

  textarea,
  div {
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }

  & > div {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.color.error.text};
  background-color: ${({ theme }) => theme.color.error.background};
`;

export const CancelButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
`;
