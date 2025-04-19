import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import { apps } from "../../data/apps";
import { useRef } from "react";
import { useApplicationStore } from "../../store/applicationStore";
import Notification from "./win95/Notification";
import Window from "./win95/Window";
import DesktopApp from "./win95/DesktopApp";
import taskbar from "./win95/Taskbar";

const DesktopScreen = () => {
  const { start } = useStart();
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const { openWindows } = useApplicationStore();

  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={
        start
          ? { visibility: "visible", zIndex: 100 }
          : { visibility: "hidden" }
      }
      transition={{ duration: 0, delay: start ? 6 : 0 }}
      className={`relative flex w-full h-full flex-col justify-between bg-[#196364] font-system text-black`}
    >
      <Notification />

      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0, delay: start ? 7 : 0 }}
        className="grid grid-flow-col-dense grid-rows-[repeat(auto-fill,minmax(70px,1fr))] auto-cols-[4rem] 3xl:[@media(min-height:860px)]:gap-8 2xl:[@media(min-height:860px)]:gap-4 gap-2 h-full w-full relative pt-4 pb-8 px-2 3xl:[@media(min-height:860px)]:py-8 3xl:[@media(min-height:860px)]:px-4 overflow-hidden "
        ref={constraintsRef}
      >
        {apps.map(({ url, label, id }) => (
          <DesktopApp key={id} id={id} url={url} label={label} />
        ))}

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
              constraintsRef={constraintsRef}
              isResize={
                id === "tictactoe" || id === "wordle" || id === "guide"
                  ? false
                  : true
              }
            >
              <Component />
            </Window>
          ))}
      </motion.div>

      <Taskbar />
    </motion.div>
  );
};

export default DesktopScreen;
