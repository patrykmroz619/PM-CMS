import styled from "@myStyled";

export const Wrapper = styled.li`
  position: relative;
  padding: ${({ theme }) => theme.spacing.s};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.tertiaryLight};
  }
`;

export const Detail = styled.p``;

export const Label = styled.strong`
  font-weight: bold;
`;
