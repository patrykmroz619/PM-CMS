import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";
import { Button } from "@common";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentName = styled.h2`
  font-size: 24px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media(breakpoints.tablet.l)} {
    text-align: left;
    font-size: 35px;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 520px;
  justify-content: space-between;
  margin-top: auto;
`;

const StyledButton = styled(Button)`
  ${media(breakpoints.tablet.m)} {
    max-width: 250px;
  }
`;

export const UpdateButton = styled(StyledButton)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const DeleteButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.danger};

  &:hover {
    background-color: ${({ theme }) => theme.color.dangerHover};
  }
`;
