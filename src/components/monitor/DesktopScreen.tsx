import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import {
  Access110,
  Joy102,
  Mailnews8,
  Mplayer10,
  Write1,
} from "@react95/icons";
import TaskBar from "./win95/TaskBar";
import Window from "./win95/Window";
import { useRef, useState } from "react";
import AboutMe from "../about/desktopVer/AboutMe";
import Tictactoe from "../games/Tictactoe";
import Wordle from "../games/Wordle";
import OldPorfolio from "./OldPortolio";
import Credits from "../Credits";

export type DesktopAppProps = {
  Icon: React.ComponentType<{
    className?: string;
    variant?: "32x32_4" | "16x16_4";
  }>;
  label: string;
  id: string;
  Component: React.ComponentType;
  iWidth: number;
  iHeight: number;
};

type WindowsProps = {
  [key: string]: boolean;
};

const desktopApps: DesktopAppProps[] = [
  {
    Icon: Mplayer10,
    label: "Credits",
    id: "credits",
    Component: Credits,
    iWidth: 450,
    iHeight: 450,
  },
  {
    Icon: Joy102,
    label: "Tictactoe",
    id: "tictactoe",
    Component: Tictactoe,
    iWidth: 300,
    iHeight: 400,
  },
  {
    Icon: Write1,
    label: "Wordle",
    id: "wordle",
    Component: Wordle,
    iWidth: 360,
    iHeight: 560,
  },
  {
    Icon: Access110,
    label: "Old Portfolio",
    id: "oldportfolio",
    Component: OldPorfolio,
    iWidth: 500,
    iHeight: 500,
  },
  {
    Icon: Mailnews8,
    label: "About Me",
    id: "about",
    Component: AboutMe,
    iWidth: 715,
    iHeight: 400,
  },
];

const DesktopScreen = () => {
  const { start } = useStart();
  const [openWindows, setOpenWindows] = useState<WindowsProps>({
    about: false,
    tictactoe: false,
    wordle: false,
    oldportfolio: false,
    credits: false,
  });
  const [activeWindows, setActiveWindows] = useState<WindowsProps>({
    about: false,
    tictactoe: false,
    wordle: false,
    oldportfolio: false,
    credits: false,
  });
  const [minimizedWindows, setMinimizedWindows] = useState<WindowsProps>({
    about: false,
    tictactoe: false,
    wordle: false,
    oldportfolio: false,
    credits: false,
  });

  const constraintsRef = useRef<HTMLDivElement | null>(null);

  // Handle activating a window
  const handleActiveWindows = (id: string) => {
    setActiveWindows((prev) => {
      const newActiveWindows = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === id;
        return acc;
      }, {} as WindowsProps);

      return newActiveWindows;
    });
  };

  // Handle opening a window
  const handleOpenWindows = (id: string) => {
    setOpenWindows((prev) => ({
      ...prev,
      [id]: true,
    }));
    handleActiveWindows(id);
    setMinimizedWindows((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  // Handle minimizing/restoring a window
  const handleMinimizeRestore = (id: string) => {
    setMinimizedWindows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: start ? 10 : 0 }}
      className="relative z-[999] top-0 flex w-full h-full flex-col justify-between leading-6 bg-[#196364] font-system text-black "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0, delay: start ? 11 : 0 }}
        className="relative flex flex-col justify-start items-start overflow-hidden gap-y-6 px-3 py-4 text-[#010101] w-full h-full"
        ref={constraintsRef}
      >
        {/* Render desktop icons */}
        {desktopApps.map(({ Icon, label, id }) => (
          <button
            key={id}
            className="bg-none shadow-none w-16 h-16 p-0 flex flex-col justify-center items-center leading-[1.1] text-[0.9rem] gap-[5px] hover:bg-white/10"
            onDoubleClick={() => handleOpenWindows(id)}
          >
            <Icon className="w-[3rem]" variant="32x32_4" />
            <span>{label}</span>
          </button>
        ))}

        {/* Render windows */}
        {desktopApps
          .reverse()
          .map(({ id, Component, label, Icon, iWidth, iHeight }) => (
            <Window
              key={id}
              title={label}
              Icon={Icon}
              iWidth={iWidth}
              iHeight={iHeight}
              isResize={id === "tictactoe" || id === "wordle" ? false : true}
              constraintsRef={constraintsRef}
              isOpen={openWindows[id]}
              isMinimized={minimizedWindows[id]}
              onOpen={(value: boolean | ((prev: boolean) => boolean)) => {
                setOpenWindows((prev) => ({
                  ...prev,
                  [id]: typeof value === "function" ? value(prev[id]) : value,
                }));
              }}
              isActive={activeWindows[id]}
              onActive={() => handleActiveWindows(id)}
              onMinimizeRestore={() => handleMinimizeRestore(id)}
            >
              <Component />
            </Window>
          ))}
      </motion.div>

      {/* TaskBar */}
      <TaskBar
        desktopApps={desktopApps}
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
        onMinimizeRestore={handleMinimizeRestore}
        onActive={handleActiveWindows}
        isActive={activeWindows}
      />
    </motion.div>
  );
};

export default DesktopScreen;
