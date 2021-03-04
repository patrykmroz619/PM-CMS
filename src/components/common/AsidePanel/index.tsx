import React from "react";

import * as S from "./styled";

type AsidePanelProps = {
  visible: boolean;
  close: () => void;
  children: React.ReactNode;
  className?: string;
};

export const AsidePanel = ({ visible, close, children, className }: AsidePanelProps) => {
  return (
    <>
      {visible && <S.BlurBackground onClick={close} />}
      <S.AsidePanel isVisible={visible} className={className}>
        {children}
      </S.AsidePanel>
    </>
  );
};
