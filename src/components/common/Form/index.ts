import styled from "@myStyled";

export const Form = styled.form`
  width: 100%;

  label {
    margin-top: ${({ theme }) => theme.spacing.m};
    margin-left: ${({ theme }) => theme.spacing.m};
    width: 100%;
  }

  input {
    margin-top: 5px;
    padding-left: ${({ theme }) => theme.spacing.m};
    padding-right: ${({ theme }) => theme.spacing.m};
    width: 100%;
    height: ${({ theme }) => theme.sizing.inputsHeight};
    background-color: ${({ theme }) => theme.color.light};
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: none;
  }
`;
