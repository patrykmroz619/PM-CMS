import styled from "@myStyled";

import { P } from "@common";

export const Wrapper = styled.li`
  padding: 0 ${({ theme }) => theme.spacing.s};
  margin-bottom: 5px;
`;

export const DataItemName = styled(P)`
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Separator = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary};
  margin: 0 auto 5px;
`;

export const DataitemValue = styled.p`
  text-align: center;
`;
