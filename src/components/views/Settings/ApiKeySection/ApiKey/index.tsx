import React from "react";

import { copyToClipboard } from "@utils";
import { useNotification } from "@hooks";
import { settingsPage as content } from "@content";

import CopyIcon from "@assets/copy.svg";
import { Input } from "@common";
import * as S from "./styled";

type ApiKeyProps = {
  apiKey?: string;
  pending: boolean;
  handleSubmit: () => void;
};

const ApiKey = ({ apiKey, pending, handleSubmit }: ApiKeyProps) => {
  const { success } = useNotification();

  const handleCopyClick = () => {
    copyToClipboard(apiKey || "copy");
    success(content.copyToClipboardNotification);
  };

  const buttonText = apiKey ? content.regenerateSubmit : content.generateSubmit;

  return (
    <S.Flex>
      <S.KeyBox>
        <Input value={apiKey} />
        {apiKey && (
          <S.CopyBtn onClick={handleCopyClick}>
            <CopyIcon />
          </S.CopyBtn>
        )}
      </S.KeyBox>
      <S.StyledButton disabled={pending} onClick={handleSubmit}>
        {pending ? "Generating..." : buttonText}
      </S.StyledButton>
    </S.Flex>
  );
};

export default ApiKey;
