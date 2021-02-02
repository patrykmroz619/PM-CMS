import styled from "@myStyled";
import { Button } from "../Button";

export const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.danger};

  &:hover {
    background-color: ${({ theme }) => theme.color.dangerHover};
  }
`;
