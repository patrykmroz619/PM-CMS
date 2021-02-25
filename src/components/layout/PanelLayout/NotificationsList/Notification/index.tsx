import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { notificationsActions } from "@actions";

import CrossIcon from "@assets/cross.svg";
import * as S from "./styled";
import usePausableTimeout from "./usePausableTimeout";

type NotificationProps = NotificationObj;

const NOTIFICATION_DURATION = 500000;

const Notification = ({ id, message, type }: NotificationProps) => {
  const dispatch = useDispatch();
  const discardNotification = () => {
    dispatch(notificationsActions.remove(id));
  };

  const notificationRef = useRef<HTMLLIElement>(null);
  const pause = usePausableTimeout(discardNotification, NOTIFICATION_DURATION, notificationRef);

  const Wrapper = type === "success" ? S.SuccessWrapper : S.ErrorWrapper;

  return (
    <Wrapper ref={notificationRef}>
      <S.Message>{message}</S.Message>
      <S.Separator />
      <S.CloseButton onClick={discardNotification}>
        <CrossIcon />
      </S.CloseButton>
      <S.Bar time={NOTIFICATION_DURATION} pause={pause} />
    </Wrapper>
  );
};

export default Notification;
