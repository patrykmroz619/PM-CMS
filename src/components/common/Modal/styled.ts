import styled from "@myStyled";
import { Spinner } from "../Spinner";

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

export const Modal = styled.div<{ pending?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 450px;
  width: 90%;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.color.light};

  * {
    opacity: ${({ pending }) => (pending ? 0.5 : 1)};
  }
`;

export const StyledSpinner = styled(Spinner)`
  opacity: 1;
  * {
    opacity: 1;
  }
`;
