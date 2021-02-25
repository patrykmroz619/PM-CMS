import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const NavItem = styled.li<{ disabled: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "pointer" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.s};
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: 0.3s;
  pointer-events: none;

  &:last-child {
    margin-right: 0;
  }

  ${media(breakpoints.descop.s)} {
    width: 46px;
    height: 46px;
  }

  svg {
    width: 80%;
  }
`;
