import { createContext, useState } from "react";

type TSeverity = "success" | "info" | "warning" | "error";

export type NotificationContextType = {
  open: boolean;
  messageTitle: string;
  subMessage?: string;
  severity: TSeverity;
  setNotification: (
    messageTitle: string,
    subMessage?: string,
    severity?: TSeverity
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
  severity: "success",
  setNotification: () => {},
  closeNotification: () => {},
});

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [subMessage, setSubMessage] = useState("");
  const [severity, setSeverity] = useState<TSeverity>("success");

  const setNotification = (
    messageTitle: string,
    subMessage?: string,
    severity: TSeverity = "success"
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
