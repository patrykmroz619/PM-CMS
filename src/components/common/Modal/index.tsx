import React, { useRef } from "react";
import { createPortal } from "react-dom";

import { useDetectOutsideClick } from "@hooks";

import * as S from "./styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const modalRoot = document.getElementById("modal") as HTMLElement;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onOutsideClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  useDetectOutsideClick(modalRef, onOutsideClick);

  if (!isOpen) return null;

  return createPortal(
    <S.Background>
      <S.Modal ref={modalRef}>{children}</S.Modal>
    </S.Background>,
    modalRoot
  );
};
