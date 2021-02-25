import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { notificationsSelector } from "@selectors";

import * as S from "./styled";
import Notification from "./Notification";

const notificationsRoot = document.getElementById("notifications") as HTMLDivElement;
const NotificationsList = () => {
  const notifications = useSelector(notificationsSelector);

  return createPortal(
    <S.Box>
      {notifications.map(({ id, message, type }) => (
        <Notification key={id} id={id} message={message} type={type} />
      ))}
    </S.Box>,
    notificationsRoot
  );
};

export default NotificationsList;
