import { useContext } from "react";
import { NotificationContext } from "../context/notification-context";

export default function Alert() {
  const { open, messageTitle, subMessage, severity, closeNotification } =
    useContext(NotificationContext);
  return open ? (
    <section
      className={`${
        severity === "success"
          ? "bg-green-200 border-green-600 text-green-600"
          : "bg-red-200 border-red-600 text-red-600"
      } border-l-4 p-4 fixed bottom-0 right-0 m-4 w-2/5 flex justify-between`}
      role="alert"
    >
      <section>
        <p className="font-bold text-left">{messageTitle}</p>
        <p className="text-left">{subMessage}</p>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => {
          closeNotification();
        }}
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </section>
  ) : null;
}
