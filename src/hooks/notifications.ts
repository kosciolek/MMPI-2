import mitt from "mitt";
import { ReactNode, useCallback, useEffect } from "react";

export type NotificationType = "error" | "info";
export type Notification = {
  type?: NotificationType;
  title: string;
  content?: ReactNode;
};
export type NotificationEvents = {
  notification: Notification;
};

const emitter = mitt<NotificationEvents>();

export const useReadNotifications = (
  onNotification: (args: Notification) => void
) => {
  useEffect(() => {
    emitter.on("notification", onNotification);
    return () => emitter.off("notification", onNotification);
  }, [onNotification]);
};

export const useNotification = () =>
  useCallback(
    (notification: Notification) =>
      emitter.emit("notification", notification),
    []
  );
