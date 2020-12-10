import { SearchInput, Button } from "@common";
import styled from "@myStyled";
import { css } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

export const Search = styled(SearchInput)<{ mobile: boolean }>`
  max-width: ${({ mobile }) => (mobile ? "100%" : "400px")};
  order: 0;
`;

export const AddButton = styled(Button)<{ mobile: boolean }>`
  ${({ mobile, theme }) =>
    mobile
      ? null
      : css`
          margin-left: ${theme.spacing.l};
          width: 300px;
        `}
`;
