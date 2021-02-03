import styled from "@myStyled";

export const ErrorBox = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.color.error.text};
  background-color: ${({ theme }) => theme.color.error.background};
`;
