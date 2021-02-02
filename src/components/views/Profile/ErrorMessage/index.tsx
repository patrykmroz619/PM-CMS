import React from "react";

import styled from "@myStyled";
import { ProfilePage as content } from "@content";

import { Button, P } from "@common";

const MessageBox = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 450px;
`;

const handleClick = () => window.location.reload();

const ErrorMessage = () => (
  <MessageBox>
    <P center>{content.errorMessage}</P>
    <Button onClick={handleClick}>{content.reloadButton}</Button>
  </MessageBox>
);

export default ErrorMessage;
