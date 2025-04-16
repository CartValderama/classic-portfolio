import type React from "react";
import { createContext, useContext, useState } from "react";

type NotificationType = "info" | "warning" | "error" | "question";

export interface NotificationOptions {
  title: string;
  message: string;
  type?: NotificationType;
  action: () => void;
}

type NotificationContextType = {
  showNotification: (options: NotificationOptions) => void;
  hideNotification: () => void;
  notification: NotificationOptions | null;
  isVisible: boolean;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notification, setNotification] = useState<NotificationOptions | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = (options: NotificationOptions) => {
    setNotification(options);
    setIsVisible(true);
  };

  const hideNotification = () => {
    setIsVisible(false);
  };

  const value = { showNotification, hideNotification, notification, isVisible };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

// Hook to use the Notification
export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
}
