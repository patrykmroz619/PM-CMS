import { SearchInput, Button } from "@common";
import styled from "@myStyled";
import { css } from "styled-components";

export const ContentWrapper = styled.div<{ $mobile: boolean; areThereProjects: boolean }>`
  display: flex;
  flex-direction: ${({ $mobile, areThereProjects }) =>
    $mobile && areThereProjects ? "column" : "row"};
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  a {
    width: ${({ $mobile }) => ($mobile ? "100%" : "auto")};
  }
`;

export const Search = styled(SearchInput)<{ $mobile: boolean }>`
  max-width: ${({ $mobile }) => ($mobile ? "100%" : "400px")};
  order: 0;
`;

export const AddButton = styled(Button)<{ $mobile: boolean }>`
  margin-top: auto;
  order: 2;
  flex-basis: 100%;
  ${({ $mobile, theme }) =>
    !$mobile &&
    css`
      margin-top: initial;
      margin-left: ${theme.spacing.l};
      width: 300px;
      order: 0;
    `}
`;
