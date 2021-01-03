import React from "react";
import styled from "@myStyled";

import { contentModelsPage as content } from "@content";
import { Button, P } from "@common";

const Btn = styled(Button)`
  width: 200px;
`;

const LackOfFieldMessage = () => (
  <div>
    <P>{content.lackOfFields.message}</P>
    <Btn to={"/panel/content/newField"}>{content.lackOfFields.button}</Btn>
  </div>
);

export default LackOfFieldMessage;
