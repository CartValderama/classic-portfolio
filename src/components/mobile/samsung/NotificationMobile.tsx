import { useNotification } from "../../../context/NotifcationContext";

const NotificationMobile = () => {
  const { notification, isVisible, hideNotification } = useNotification();

  if (!notification) return null;

  const { title, message, action } = notification;

  return (
    <div
      className={`absolute w-full h-full inset-0 flex items-center justify-center ${
        isVisible ? "block z-100 backdrop-blur-[.7px]" : "hidden"
      }`}
    >
      <div
        className={`w-[80%] mobile:[@media(max-height:450px)]:w-[60%] select-none bg-white rounded-md`}
      >
        <div className="p-4">
          <h2 className="text-black font-semibold mb-2 text-lg">{title}</h2>
          <p className="text-gray-800 text-base font-normal">{message}</p>
        </div>

        <div className="flex justify-center w-full text-base">
          <button
            className="w-full border-t border-stone-300  text-black font-semibold  py-2 active:bg-stone-100 transition-colors duration-150 cursor-pointer"
            onClick={() => {
              action();
              hideNotification();
            }}
          >
            OK
          </button>
          <button
            className="w-full border-stone-300 border-t border-l text-black font-semibold  py-2 active:bg-stone-100 transition-colors duration-150 cursor-pointer"
            onClick={() => {
              hideNotification();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationMobile;
