import React from "react";
import styled from "@myStyled";

import { contentModelsPage as content } from "@content";
import { Button, P } from "@common";

type LackOfFieldMessageProps = { openNewFieldPanel: () => void };

const Btn = styled(Button)`
  width: 200px;
`;

const LackOfFieldMessage = ({ openNewFieldPanel }: LackOfFieldMessageProps) => (
  <section>
    <P>{content.lackOfFields.message}</P>
    <Btn onClick={openNewFieldPanel}>{content.lackOfFields.button}</Btn>
  </section>
);

export default LackOfFieldMessage;
