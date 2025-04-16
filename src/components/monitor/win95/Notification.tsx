import { FaXmark } from "react-icons/fa6";
import { useNotification } from "../../../context/NotifcationContext";
import { Button } from "./Button";
import { InfoBubble, QuestionBubble, User4, Warning } from "@react95/icons";

const Icons = {
  warning: <Warning className="w-12 h-12" />,
  question: <QuestionBubble className="w-12 h-12" />,
  error: <User4 className="w-12 h-12" />,
  info: <InfoBubble className="w-12 h-12" />,
};

function Notification() {
  const { notification, isVisible, hideNotification } = useNotification();

  if (!notification) return null;

  const { title, message, type = "info", action } = notification;

  return (
    <div
      className={`absolute w-full h-full inset-0 flex items-center justify-center ${
        isVisible ? "block z-10 backdrop-blur-[.7px]" : "hidden"
      }`}
    >
      <div className={`w-full max-w-md select-none`}>
        {/* Windows 95 style dialog */}
        <div className="overflow-hidden bg-[#c3c7cb] border border-white border-r-[#868a8e] border-b-[#868a8e] shadow-outline touch-none">
          {/* Title bar */}
          <div className="flex h-7 items-center justify-between bg-[#000e7a] px-1 text-white">
            <p className="capitalize flex items-center gap-x-1 ml-1">{title}</p>
            <Button
              variant={"default"}
              size={"icon"}
              onClick={hideNotification}
            >
              <FaXmark size={12} />
            </Button>
          </div>

          {/* Content */}
          <div className="px-4 py-2">
            <div className="flex gap-x-4 items-center">
              {Icons[type]} <p>{message}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-x-1">
              <Button
                variant={"default"}
                onClick={() => {
                  action();
                  hideNotification();
                }}
                className="w-20"
              >
                ok
              </Button>
              <Button
                variant={"default"}
                onClick={hideNotification}
                className="w-20"
              >
                cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
