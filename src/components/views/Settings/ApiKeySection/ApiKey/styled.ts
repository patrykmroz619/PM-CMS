import styled from "@myStyled";
import { Button } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media(breakpoints.tablet.m)} {
    flex-wrap: nowrap;
  }
`;

export const KeyBox = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  padding: 0 ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.color.primaryLight};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  div {
    margin-bottom: 0;
  }
`;

export const CopyBtn = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  padding: 5px;

  svg {
    fill: ${({ theme }) => theme.color.dark};
  }
`;

export const StyledButton = styled(Button)`
  flex-shrink: 0;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  max-width: 400px;
  ${media(breakpoints.tablet.m)} {
    max-width: 300px;
  }
`;
