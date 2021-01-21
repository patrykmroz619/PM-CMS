import { useState } from "react";

type AsidePanelUtils = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

type UseAsidePanelHandlerType = () => AsidePanelUtils;

export const useAsidePanelHandler: UseAsidePanelHandlerType = () => {
  const [panelVisible, setPanelVisibility] = useState(false);

  const openPanel = () => setPanelVisibility(true);
  const closePanel = () => setPanelVisibility(false);

  return {
    visible: panelVisible,
    open: openPanel,
    close: closePanel
  };
};
