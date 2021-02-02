import React from "react";

import { Modal } from "../Modal";
import * as S from "./styled";

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
}: ConfirmationModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <S.Message>{message}</S.Message>
    <S.Button onClick={onConfirm}>Yes</S.Button>
    <S.Button secondary onClick={onClose}>
      No
    </S.Button>
  </Modal>
);
