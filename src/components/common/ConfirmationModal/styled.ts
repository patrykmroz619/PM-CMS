import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";
import { Button as Btn } from "../Button";
import { P } from "../Paragraph";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 300px;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.color.light};
`;

export const Message = styled(P)`
  flex-basis: 100%;
  text-align: center;
`;

export const Button = styled(Btn)`
  margin-top: ${({ theme }) => theme.spacing.m};

  ${media(breakpoints.mobile.xl)} {
    max-width: 150px;
  }
`;
