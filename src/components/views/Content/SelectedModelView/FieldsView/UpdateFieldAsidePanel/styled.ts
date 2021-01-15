import { Button, P } from "@common";
import styled from "@myStyled";

export const ListLabel = styled(P)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: 0;
  text-align: center;
`;

export const CancelButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s};
  margin-top: 0;
  width: calc(100% - ${({ theme }) => theme.spacing.s} * 2);
`;

export const DeleteButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s};
  margin-top: 0;
  width: calc(100% - ${({ theme }) => theme.spacing.s} * 2);
  background-color: ${({ theme }) => theme.color.danger};

  &:hover {
    background-color: ${({ theme }) => theme.color.dangerHover};
  }
`;
