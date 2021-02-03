import React, { useRef } from "react";
import { createPortal } from "react-dom";

import { useDetectOutsideClick } from "@hooks";

import { Spinner } from "../Spinner";
import * as S from "./styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  loading?: boolean;
};
const modalRoot = document.getElementById("modal") as HTMLElement;

export const Modal = ({ isOpen, onClose, children, loading }: ModalProps) => {
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
      <S.Modal loading={loading} ref={modalRef}>
        {children}
        {loading && <S.StyledSpinner />}
      </S.Modal>
    </S.Background>,
    modalRoot
  );
};
