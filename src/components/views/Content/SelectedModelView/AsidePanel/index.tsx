import React from "react";

import * as S from "./styled";

type AsidePanelProps = {
  visible: boolean;
  close: () => void;
  children: React.ReactNode;
};

const AsidePanel = ({ visible, close, children }: AsidePanelProps) => {
  return (
    <>
      {visible && <S.BlurBackground onClick={close} />}
      <S.AsidePanel isVisible={visible}>{children}</S.AsidePanel>
    </>
  );
};

export default AsidePanel;
