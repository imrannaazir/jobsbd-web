import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TNotificationState = {
  unreadCount: number;
};

const initialState: TNotificationState = {
  unreadCount: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setUnreadCount: (state, action: PayloadAction<number>) => {
      state.unreadCount = action.payload;
    },
    resetUnreadCount: (state) => {
      state.unreadCount = 0;
    },
  },
});

export const { resetUnreadCount, setUnreadCount } = notificationSlice.actions;

export default notificationSlice.reducer;

export const selectNotificationState = (state: RootState) => state.notification;
