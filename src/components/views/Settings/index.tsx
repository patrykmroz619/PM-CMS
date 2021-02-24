import styled from "@myStyled";
import React from "react";

import DangerZone from "./DangerZone";
import NameSection from "./NameSection";

const Wrapper = styled.div`
  max-width: 900px;
`;

const SettingsView = () => {
  return (
    <Wrapper>
      <NameSection />
      <DangerZone />
    </Wrapper>
  );
};

export default SettingsView;
