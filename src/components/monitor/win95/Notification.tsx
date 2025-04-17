import { FaXmark } from "react-icons/fa6";
import { useNotification } from "../../../context/NotifcationContext";
import { MdError, MdInfo, MdQuestionMark, MdWarning } from "react-icons/md";

const Icons = {
  warning: <MdWarning className="w-12 h-12" />,
  question: <MdQuestionMark className="w-12 h-12" />,
  error: <MdError className="w-12 h-12" />,
  info: <MdInfo className="w-12 h-12" />,
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
            <button
              className="win95-button w-5.5 h-5 shadow-outline flex"
              onClick={hideNotification}
            >
              <FaXmark size={12} />
            </button>
          </div>

          {/* Content */}
          <div className="px-4 py-2">
            <div className="flex gap-x-4 items-center">
              {Icons[type]} <p>{message}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-x-1.5">
              <button
                className="win95-button shadow-outline w-20 flex"
                onClick={() => {
                  action();
                  hideNotification();
                }}
              >
                ok
              </button>
              <button
                className="win95-button shadow-outline w-20 flex"
                onClick={hideNotification}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
