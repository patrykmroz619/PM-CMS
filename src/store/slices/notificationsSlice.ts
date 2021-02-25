import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";

type NotificationsState = {
  notifications: NotificationObj[];
};

type NotificationId = string;

const initialState: NotificationsState = {
  notifications: []
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    success(state, action: PayloadAction<string>) {
      const notification: NotificationObj = {
        id: uid(),
        message: action.payload,
        type: "success"
      };

      state.notifications.unshift(notification);
    },
    error(state, action: PayloadAction<string>) {
      const notification: NotificationObj = {
        id: uid(),
        message: action.payload,
        type: "error"
      };

      state.notifications.unshift(notification);
    },
    remove(state, action: PayloadAction<NotificationId>) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id != action.payload
      );
    }
  }
});

export default notificationsSlice;
