import styled from "@myStyled";

import { Button, Form as BaseForm } from "@common";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 350px;
`;

export const Heading = styled.h3`
  width: 100%;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.m};
`;
