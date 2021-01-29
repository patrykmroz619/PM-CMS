import { useState } from "react";

type isOpenType = boolean;

type ConfirmType = () => void;
type CloseType = () => void;
type OpenType = () => void;

type UseConfirmationModalHandlerType = (
  onConfirm: ConfirmType
) => [isOpenType, OpenType, CloseType, ConfirmType];

export const useConfirmationModalHandler: UseConfirmationModalHandlerType = (onConfirm) => {
  const [isModalOpen, setModalIsOpen] = useState<isOpenType>(false);

  const open = () => setModalIsOpen(true);
  const close = () => setModalIsOpen(false);
  const confirm = () => onConfirm();

  return [isModalOpen, open, close, confirm];
};
