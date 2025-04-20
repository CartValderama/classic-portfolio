import { AiOutlinePoweroff, AiOutlineRollback } from "react-icons/ai";
import { useNotification } from "../../../context/NotifcationContext";
import { useStart } from "../../../context/StartContext";
import { useApplicationStore } from "../../../store/applicationStore";
import { usePhoneUIStore } from "../../../store/phoneUIStore";

const PhoneButtons = () => {
  const { setStart } = useStart();
  const { activeWindow, InactiveAll, closeWindow, closeAllWindows } =
    useApplicationStore();
  const { setShowApps, setHideStatus } = usePhoneUIStore();
  const { showNotification } = useNotification();

  const handleNotification = () => {
    showNotification({
      title: "Shutting Down",
      message: "This will shut down the phone. Press OK to proceed",
      type: "question",
      action: () => {
        setHideStatus(true);
        setShowApps(false);
        setStart(false);
        closeAllWindows();
      },
    });
  };

  return (
    <div className="w-full flex items-center justify-around mt-6 mobile:[@media(max-height:450px)]:mt-0 mobile:[@media(max-height:450px)]:mr-6 mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:flex-col">
      <button
        type="button"
        className="active:scale-98 cursor-pointer"
        onClick={handleNotification}
      >
        <AiOutlinePoweroff className="text-3xl font-bold text-[#797777] mobile:[@media(max-height:450px)]:rotate-90" />
      </button>
      <button
        type="button"
        className="w-24 h-12 border-3 border-[#515455] rounded-xl active:scale-98 cursor-pointer mobile:[@media(max-height:450px)]:w-12 mobile:[@media(max-height:450px)]:h-[25%]"
        onClick={() => {
          setHideStatus(false);
          setShowApps(false);
          InactiveAll();
        }}
      >
        <div className="w-full h-full bg-[#131314] rounded-lg border-[#797777] border" />
      </button>
      <button
        type="button"
        className="active:scale-98 cursor-pointer"
        onClick={() => {
          setHideStatus(false);
          if (activeWindow) {
            closeWindow(activeWindow);
          }
        }}
      >
        <AiOutlineRollback className="text-3xl text-[#797777] mobile:[@media(max-height:450px)]:rotate-90" />
      </button>
    </div>
  );
};

export default PhoneButtons;
