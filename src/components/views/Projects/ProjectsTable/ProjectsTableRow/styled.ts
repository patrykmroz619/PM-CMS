import styled from "@myStyled";

export const TR = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.tertiaryLight};
  }
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryHover};
  }
`;

export const TD = styled.td`
  padding: ${({ theme }) => theme.spacing.s};
`;
