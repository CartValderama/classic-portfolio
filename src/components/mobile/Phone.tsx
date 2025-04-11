import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import MainMobileScreen from "./MainMobileScreen";
import { useState } from "react";
import { AiOutlinePoweroff, AiOutlineRollback } from "react-icons/ai";
import { useApplicationStore } from "../../store/AppStore/ApplicationStore";

const Phone = () => {
  const { start, setStart } = useStart();
  const [isShowApps, setShowApps] = useState(false);
  const [isHideStatus, setHideStatus] = useState(false);
  const { activeWindow, InactiveAll, closeWindow } = useApplicationStore();

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
      className={`flex w-full h-full items-center justify-center absolute `}
    >
      <div className="w-full h-full min-h-[600px] mobile:w-[600px] mobile:min-h-[820px] mobile:mb-10 mobile:[@media(max-height:450px)]:mb-0 mobile:max-h-[1000px] mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:min-h-auto mobile:[@media(max-height:450px)]:h-full relative [@media(max-height:450px)]:border-0 mobile:border-2 bg-[#2b2b2e] border-[#262627] mobile:rounded-[7rem] [@media(max-height:450px)]:rounded-none ">
        <div className="hidden [@media(max-height:450px)]:hidden mobile:block bg-[#868484] w-0.5 h-18 absolute -right-1 rounded-r-lg mobile:rounded-r-2xl top-40"></div>
        <div className="hidden [@media(max-height:450px)]:hidden mobile:block bg-[#868484] w-0.5 h-30 absolute -left-1 rounded-l-lg mobile:rounded-l-2xl top-60"></div>

        <div className="[@media(max-height:450px)]:border-0 mobile:border-10 border-[#242429] mobile:rounded-[7rem] w-full h-full ">
          <div className="[@media(max-height:450px)]:border-0 mobile:border-2 border-[#515455] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center">
            <div className="[@media(max-height:450px)]:border-0 mobile:border-2 border-[#171718] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center bg-[#131314] p-4 mobile:py-12 mobile:px-12 [@media(max-height:450px)]:rounded-none mobile:[@media(max-height:450px)]:px-4 mobile:[@media(max-height:450px)]:py-4 mobile:[@media(max-height:450px)]:flex-row-reverse">
              <div className="hidden mobile:flex flex-col justify-center items-center w-full mb-5 mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:py-0 mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:mb-0 mobile:[@media(max-height:450px)]:ml-5 ">
                <div className="flex items-center justify-between w-full mobile:[@media(max-height:450px)]:flex-col mobile:[@media(max-height:450px)]:h-full">
                  <div className="w-5 h-5 ml-5 mobile:[@media(max-height:450px)]:mt-5"></div>
                  <div className="w-38 h-2 bg-[#242425] rounded-3xl border-2 border-[#515455] mobile:[@media(max-height:450px)]:w-2 mobile:[@media(max-height:450px)]:h-38"></div>
                  <div className="bg-[#1e1e1e] border-2 border-[#464646] w-5 h-5 rounded-full mr-5 flex items-center justify-center mobile:[@media(min-height:550px)]:mr-0 mobile:[@media(max-height:450px)]:mt-5">
                    <div className="w-3.5 h-3.5 bg-[#464646] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#1e1e1e] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="uppercase font-bold text-lg text-white mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
                  SpamSung
                </p>
              </div>

              {/* main screen */}
              <div className="rounded-xs w-full h-full">
                <MainMobileScreen
                  isShowApps={isShowApps}
                  setShowApps={setShowApps}
                  isHideStatus={isHideStatus}
                  setHideStatus={setHideStatus}
                />
              </div>

              <div className="w-full flex items-center justify-around mt-6 mobile:[@media(max-height:450px)]:mt-0 mobile:[@media(max-height:450px)]:mr-6 mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:flex-col">
                <button
                  className="active:scale-98 cursor-pointer"
                  onClick={() => {
                    setHideStatus(true);
                    setStart(!start);
                    setShowApps(false);
                  }}
                >
                  <AiOutlinePoweroff className="text-3xl font-bold text-[#797777] mobile:[@media(max-height:450px)]:rotate-90" />
                </button>
                <button
                  className="w-24 h-12 border-3 border-[#515455] rounded-xl active:scale-98 cursor-pointer mobile:[@media(max-height:450px)]:w-12 mobile:[@media(max-height:450px)]:h-[25%]"
                  onClick={() => {
                    setHideStatus(false);
                    setShowApps(false);
                    InactiveAll();
                  }}
                >
                  <div className="w-full h-full bg-[#131314] rounded-lg border-[#797777] border"></div>
                </button>
                <button
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phone;
