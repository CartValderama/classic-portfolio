import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import MainMobileScreen from "./MainMobileScreen";
import { useState } from "react";
import {
  AppID,
  useApplicationStore,
} from "../../store/AppStore/DesktopApplicationStore";

const Phone = () => {
  const { start } = useStart();
  const [isShowApps, setShowApps] = useState(false);
  const { activeWindows, handleInactiveWindows } = useApplicationStore();

  const handleActiveWindows = () => {
    const activeWindow = Object.keys(activeWindows).find(
      (key) => activeWindows[key as keyof typeof activeWindows] === true
    );

    if (activeWindow) {
      handleInactiveWindows(activeWindow as AppID);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={start ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
      transition={{
        duration: 0.6,
        delay: start ? 2 : 0,
        ease: "easeInOut",
      }}
      layout="position"
      className={`flex w-full h-full flex-col items-center justify-center absolute`}
    >
      <div className="w-full mobile:w-[80%] h-full relative mobile:border-2 bg-[#2b2b2e] border-[#262627] mobile:rounded-[7rem]">
        <div className="hidden mobile:block bg-[#868484] w-0.5 h-18 absolute -right-1 rounded-r-lg top-40"></div>
        <div className="hidden mobile:block bg-[#868484] w-0.5 h-30 absolute -left-1 rounded-l-lg top-60"></div>
        <div className="mobile:border-10 border-[#242429] mobile:rounded-[7rem] w-full h-full">
          <div className="mobile:border-2 border-[#515455] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center">
            <div className="mobile:border-2 border-[#171718] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center bg-[#131314] p-4 mobile:py-16 mobile:px-12">
              <div className="flex flex-col justify-center items-center w-full mb-5">
                <div className="flex items-center justify-between w-full">
                  <div className="w-5 h-5 ml-5"></div>
                  <div className="w-38 h-2 bg-[#242425] rounded-3xl border-2 border-[#515455]"></div>
                  <div className="bg-[#1e1e1e] border-2 border-[#464646] w-5 h-5 rounded-full mr-5 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-[#464646] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#1e1e1e] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="uppercase font-bold text-lg text-white">
                  SpamSung
                </p>
              </div>

              {/* main screen */}
              <div className="w-full h-full rounded-xs ">
                <MainMobileScreen
                  isShowApps={isShowApps}
                  setShowApps={setShowApps}
                />
              </div>

              <div className="w-full flex items-center justify-center mt-5">
                <button
                  className="w-20 h-12 border-3 border-[#515455] rounded-xl active:scale-98 cursor-pointer"
                  onClick={() => {
                    setShowApps(false);
                    handleActiveWindows();
                  }}
                >
                  <div className="w-full h-full bg-[#131314] rounded-lg border-[#797777] border"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phone;
