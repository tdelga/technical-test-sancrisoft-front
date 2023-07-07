import { createContext, useState } from "react";

export enum ESeverity {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export type NotificationContextType = {
  open: boolean;
  messageTitle: string;
  subMessage?: string;
  severity: ESeverity;
  setNotification: (
    messageTitle: string,
    subMessage?: string,
    severity?: ESeverity
  ) => void;
  closeNotification: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const NotificationContext = createContext<NotificationContextType>({
  open: false,
  messageTitle: "",
  subMessage: "",
  severity: ESeverity.success,
  setNotification: () => {},
  closeNotification: () => {},
});

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [subMessage, setSubMessage] = useState("");
  const [severity, setSeverity] = useState<ESeverity>(ESeverity.success);

  const setNotification = (
    messageTitle: string,
    subMessage?: string,
    severity: ESeverity = ESeverity.success
  ) => {
    setMessageTitle(messageTitle);
    setSubMessage(subMessage || "");
    setSeverity(severity);
    setOpen(true);
  };

  const closeNotification = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider
      value={{
        open,
        messageTitle,
        severity,
        subMessage,
        setNotification,
        closeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
