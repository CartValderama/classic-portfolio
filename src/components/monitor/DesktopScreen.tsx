import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import TaskBar from "./win95/TaskBar";
import Window from "./win95/Window";
import { useRef } from "react";
import { useApplicationStore } from "../../store/AppStore/ApplicationStore";
import { apps } from "../../data/staticData";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0, delay: start ? 8 : 0 }}
        className="grid grid-flow-col-dense grid-rows-[repeat(auto-fill,minmax(4rem,1fr))] auto-cols-[4rem] 3xl:gap-8 gap-4 h-full w-full relative py-4 px-2 3xl:p-5 overflow-hidden "
        ref={constraintsRef}
      >
        {/* Render desktop icons */}
        {apps
          .slice()
          .reverse()
          .map(({ DesktopIcon, label, id }) => (
            <button
              key={id}
              className="bg-none shadow-none p-0 flex flex-col justify-center items-center leading-[1.1] text-[0.9rem] 3xl:text-lg gap-[5px] cursor-pointer group focus:outline-none"
              onDoubleClick={() => handleOpenWindows(id)}
              onPointerDown={(e) => {
                if (e.pointerType === "touch" || e.pointerType === "pen") {
                  e.preventDefault();
                  handleOpenWindows(id);
                }
              }}
            >
              <div className="relative">
                <DesktopIcon
                  className="w-[2rem] h-[2rem] group-focus:-z-10 3xl:w-[2.5rem] 3xl:h-[2.5rem]"
                  variant="32x32_4"
                />
                <div className="absolute inset-0 bg-[#091558] opacity-0 group-focus:opacity-80" />
              </div>
              <span className="group-focus:text-white group-focus:bg-[#091558] border-[.5px] border-dashed border-transparent group-focus:border-white">
                {label}
              </span>
            </button>
          ))}

        {/* Render windows */}
        {apps
          .filter(({ id }) => openWindows[id])
          .map(({ id, component, label, DesktopIcon, iWidth, iHeight }) => (
            <Window
              id={id}
              key={id}
              title={label}
              Icon={DesktopIcon}
              iWidth={iWidth}
              iHeight={iHeight}
              isResize={
                id === "tictactoe" || id === "wordle" || id === "guide"
                  ? false
                  : true
              }
              constraintsRef={constraintsRef}
            >
              {component}
            </Window>
          ))}
      </motion.div>

      {/* TaskBar */}
      <TaskBar apps={apps} />
    </motion.div>
  );
};

export default DesktopScreen;
