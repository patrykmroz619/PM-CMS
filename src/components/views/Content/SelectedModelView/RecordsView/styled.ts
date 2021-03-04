import styled from "@myStyled";

import media, { breakpoints } from "@mediaQuery";
import { SearchInput, DropDown, Button } from "@common";

export const ViewWrapper = styled.section`
  ${media(breakpoints.tablet.m)} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Search = styled(SearchInput)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  max-width: 100%;

  ${media(breakpoints.tablet.m)} {
    margin-right: ${({ theme }) => theme.spacing.m};
    margin-bottom: ${({ theme }) => theme.spacing.m};
    max-width: 300px;
  }
`;

export const StyledDropDown = styled(DropDown)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.s};

  ${media(breakpoints.tablet.m)} {
    margin-bottom: ${({ theme }) => theme.spacing.m};
    max-width: 200px;
  }
`;

export const AddButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};

  ${media(breakpoints.tablet.m)} {
    margin-top: ${({ theme }) => theme.spacing.m};
    max-width: 250px;
  }
`;
