import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import Window from "./win95/Window";
import { useRef } from "react";
import { useApplicationStore } from "../../store/AppStore/ApplicationStore";
import Notification from "./win95/Notification";
import TaskBar from "./win95/TaskBar";
import { apps } from "../../data/apps";

const DesktopScreen = () => {
  const { start } = useStart();
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const { handleOpenWindows, openWindows } = useApplicationStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -1 }}
      transition={{ duration: 0, delay: start ? 7 : 0 }}
      className={`relative flex w-full h-full flex-col justify-between bg-[#196364] font-system text-black`}
    >
      <Notification />

      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0, delay: start ? 8 : 0 }}
        className="grid grid-flow-col-dense grid-rows-[repeat(auto-fill,minmax(68px,1fr))] auto-cols-[4rem] 3xl:[@media(min-height:1060px)]:gap-8 2xl:gap-4 gap-2 h-full w-full relative pt-4 pb-8 px-2 3xl:[@media(min-height:1060px)]:p-5 overflow-hidden "
        ref={constraintsRef}
      >
        {/* Render desktop icons */}

        {apps
          .slice()
          .reverse()
          .map(({ url, label, id }) => (
            <button
              key={id}
              className="bg-none shadow-none p-0 flex flex-col justify-center items-center leading-[1.1] text-[0.9rem] 3xl:[@media(min-height:1060px)]:text-lg gap-[5px] cursor-pointer group focus:outline-none"
              onDoubleClick={() => handleOpenWindows(id)}
              onPointerDown={(e) => {
                if (e.pointerType === "touch" || e.pointerType === "pen") {
                  e.preventDefault();
                  handleOpenWindows(id);
                }
              }}
            >
              <div className="relative ">
                <img
                  src={url}
                  alt="Wordle"
                  className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-13 3xl:h-13"
                />
                <div className="absolute inset-0 bg-[#091558] opacity-0 group-focus:opacity-80" />
              </div>
              <span className="group-focus:text-white group-focus:bg-[#091558] border-[.5px] border-dashed border-transparent group-focus:border-white truncate w-14 3xl:[@media(min-height:1060px)]:w-18">
                {label}
              </span>
            </button>
          ))}
        {/* Render windows */}
        {apps
          .filter(({ id }) => openWindows[id])
          .map(({ id, Component, label, url, iWidth, iHeight }) => (
            <Window
              id={id}
              key={id}
              title={label}
              icon={url}
              iWidth={iWidth}
              iHeight={iHeight}
              isResize={
                id === "tictactoe" || id === "wordle" || id === "guide"
                  ? false
                  : true
              }
              constraintsRef={constraintsRef}
            >
              <Component />
            </Window>
          ))}
      </motion.div>

      {/* TaskBar */}
      <TaskBar apps={apps} />
    </motion.div>
  );
};

export default DesktopScreen;
