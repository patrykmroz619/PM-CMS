import styled from "@myStyled";

import { Button } from "@common";

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
