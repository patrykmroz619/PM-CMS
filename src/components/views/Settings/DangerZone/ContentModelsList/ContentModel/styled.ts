import styled from "@myStyled";

import { Button } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0;
`;

export const ModelName = styled.p`
  line-height: ${({ theme }) => theme.sizing.inputsHeight};
`;

export const Btn = styled(Button)`
  width: 300px;
  display: none;

  ${media(breakpoints.tablet.m)} {
    display: block;
  }
`;

export const Bin = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;

  ${media(breakpoints.tablet.m)} {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  svg {
    width: 65%;
  }
`;
