import React, { useRef } from "react";
import { createPortal } from "react-dom";

import { useDetectOutsideClick } from "@hooks";

import * as S from "./styled";

const modalRoot = document.getElementById("modal") as HTMLElement;

type ConfirmationModalProps = {
  message: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmationModal = ({
  message,
  isOpen,
  onConfirm,
  onClose
}: ConfirmationModalProps) => {
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
      <S.Modal ref={modalRef}>
        <S.Message>{message}</S.Message>
        <S.Button onClick={onConfirm}>Yes</S.Button>
        <S.Button secondary onClick={onClose}>
          No
        </S.Button>
      </S.Modal>
    </S.Background>,
    modalRoot
  );
};
