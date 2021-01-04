import styled from "@myStyled";

import { P } from "@common";

export const ListItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  flex-basis: calc(50% - 10px);
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.color.tertiary};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary : "transparent"};
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 45px;
    height: 45px;
    margin-right: ${({ theme }) => theme.spacing.s};
    padding: 5px;
  }
`;

export const Type = styled(P)`
  font-weight: 500;
  line-height: 1.5;
`;
