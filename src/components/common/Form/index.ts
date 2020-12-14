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
  }
`;
