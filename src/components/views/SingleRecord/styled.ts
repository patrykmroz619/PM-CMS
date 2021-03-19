import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";
import { Button as Btn } from "@common";

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
  max-width: 650px;
  justify-content: space-between;
  margin-top: auto;

  a {
    width: 100%;

    ${media(breakpoints.tablet.l)} {
      width: 200px;
    }
  }
`;

export const Button = styled(Btn)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  width: 100%;
  ${media(breakpoints.tablet.l)} {
    width: 200px;
  }
`;
