import { motion } from "framer-motion";
import { Clock } from "./Clock";
import { Button } from "./Button";
import { AppProps } from "../../../data/staticData";
import { AiFillRobot } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { Computer3 } from "@react95/icons";
import { FaSquareGithub } from "react-icons/fa6";
import { useStart } from "../../../context/StartContext";
import { useApplicationStore } from "../../../store/AppStore/ApplicationStore";

type TaskBarProps = {
  apps: AppProps[];
};

const TaskBar = ({ apps }: TaskBarProps) => {
  const { start, setStart } = useStart();
  const [showTaskBarMenu, setShowTaskBarMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    openWindows,
    activeWindow,
    minimizedWindows,
    handleActiveWindow,
    handleMinimizeRestore,
  } = useApplicationStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowTaskBarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: start ? 8 : 0 }}
      className={`bg-[#c3c7cb] border-t border-t-white w-full flex items-center justify-between gap-x-4 py-[3px] px-[3px] select-none`}
    >
      {/* Start Button */}
      <div ref={menuRef} className="relative">
        <div
          className={`absolute flex ${
            showTaskBarMenu ? "block z-10" : "hidden"
          } bottom-9 3xl:bottom-12 -left-[1px] bg-[#c3c7cb] border border-[#868a8e] border-l-white border-t-white shadow-outline min-h-60`}
        >
          <p className="bg-[#7b7d7b] text-[#c3c7cb] flex flex-col items-start rotate-180 [writing-mode:vertical-rl] text-xl 3xl:text-3xl font-black font-ms px-2 py-1 3xl:px-4 3xl:py-2 ">
            ValderamaOS
          </p>
          <div className="flex flex-col-reverse">
            <Button
              variant={"ghost"}
              className="px-2 py-2 gap-x-2 pr-8"
              onClick={() => {
                setShowTaskBarMenu(false);
                setStart(false);
              }}
            >
              <i>
                <Computer3 variant="32x32_4" />
              </i>
              <span className="text-sm 3xl:text-xl">Shutdown...</span>
            </Button>
            <span className="border border-white border-t-[#7b7d7b] border-l-[#7b7d7b] flex mx-1"></span>
            <Button
              variant={"ghost"}
              className="px-2 py-2 gap-x-2 pr-4"
              onClick={() => {
                setShowTaskBarMenu(false);
                window.open(
                  "https://github.com/CartValderama/portfolio-main",
                  "_blank"
                );
              }}
            >
              <i>
                <FaSquareGithub className="text-3xl text-black" />
              </i>
              <span className="text-sm 3xl:text-xl">Source Code</span>
            </Button>{" "}
          </div>
        </div>
        <Button
          variant={"default"}
          className="shadow-outline focus:outline-none px-2 3xl:py-1"
          onClick={() => setShowTaskBarMenu(!showTaskBarMenu)}
        >
          <span className="flex items-center gap-x-0.5 3xl:text-2xl">
            <AiFillRobot className="text-[.9rem] text-stone-900 3xl:text-2xl" />
            Menu
          </span>
        </Button>
      </div>

      {/* Taskbar Buttons for Open Windows */}
      <div className="w-full h-full flex items-baseline justify-start gap-x-1">
        {apps
          .filter(({ id }) => openWindows[id])
          .reverse()
          .map(({ id, DesktopIcon, label }) => (
            <Button
              key={id}
              variant={"tab"}
              className={`h-full flex items-center 
              min-w-0 flex-1
              max-w-36 3xl:max-w-50 px-2 gap-1
              ${
                minimizedWindows[id]
                  ? "shadow-outline"
                  : activeWindow === id
                  ? "bg-[#c3c7cb] border-[#868a8e] border-r-white border-b-white"
                  : "shadow-outline"
              }`}
              onClick={() => {
                if (minimizedWindows[id]) {
                  handleActiveWindow(id);
                  handleMinimizeRestore(id);
                } else if (activeWindow !== id) {
                  handleActiveWindow(id);
                } else {
                  handleMinimizeRestore(id);
                }
              }}
            >
              <DesktopIcon variant="16x16_4" className="3xl:h-5 3xl:w-5" />
              <span className="truncate 3xl:text-2xl">{label}</span>
            </Button>
          ))}
      </div>

      {/* Clock */}
      <Clock />
    </motion.div>
  );
};

export default TaskBar;
