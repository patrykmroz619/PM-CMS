import { Button } from "@common";
import styled from "@myStyled";

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const FormWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 350px;
  bottom: 0;
  transition: 0.3s;
  transform: ${({ isVisible }) => (isVisible ? "translateX(0px)" : "translateX(100%)")};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  border-left: 1px solid ${({ theme }) => theme.color.tertiary};
  overflow-y: auto;
`;

export const CancelButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s};
  margin-top: 0;
  width: calc(100% - ${({ theme }) => theme.spacing.s} * 2);
`;
