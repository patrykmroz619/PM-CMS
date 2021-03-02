import { notificationsActions } from "@actions";
import { useDispatch } from "react-redux";

type NotifyType = (notification: string) => void;

type UseNotificationType = () => { success: NotifyType; error: NotifyType };

export const useNotification: UseNotificationType = () => {
  const dispatch = useDispatch();

  const success: NotifyType = (notification) => {
    dispatch(notificationsActions.success(notification));
  };

  const error: NotifyType = (notification) => {
    dispatch(notificationsActions.error(notification));
  };

  return { success, error };
};
