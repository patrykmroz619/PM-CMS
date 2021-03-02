import React from "react";
import { useSelector } from "react-redux";

import { currentProjectSelector } from "@selectors";
import useGenerateApiKey from "./useGenerateApiKey";
import { settingsPage as content } from "@content";

import ApiKey from "./ApiKey";
import * as S from "./styled";

const ApiKeySection = () => {
  const apiKey = useSelector(currentProjectSelector.apiKey);

  const [pending, handleSubmit] = useGenerateApiKey();

  return (
    <S.Section>
      <S.Heading>{content.apiKey}</S.Heading>
      <ApiKey apiKey={apiKey} handleSubmit={handleSubmit} pending={pending} />
    </S.Section>
  );
};

export default ApiKeySection;
