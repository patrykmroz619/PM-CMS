import styled from "@myStyled";
import { keyframes } from "styled-components";

const Wrapper = styled.li`
  position: relative;
  margin: 5px 0;
  padding: 10px;
  display: flex;
  width: 100%;
  min-height: 30px;
`;

export const SuccessWrapper = styled(Wrapper)`
  background-color: #53a653;
`;

export const ErrorWrapper = styled(Wrapper)`
  background-color: #cd5c5c;
`;

export const Message = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  margin: 0;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Separator = styled.div`
  margin: 0 10px;
  width: 1px;
  height: 30px;
  background-color: #ffffff66;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px;
  background-color: transparent;
  border: none;

  svg {
    width: 20px;
    fill: white;
  }
`;

const barAnimation = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

export const Bar = styled.div<{ time: number; pause: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
  background-color: white;
  transform-origin: 0 0;
  animation-name: ${barAnimation};
  animation-duration: ${({ time }) => `${time / 1000}s`};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-play-state: ${({ pause }) => (pause ? "paused" : "running")};
`;
