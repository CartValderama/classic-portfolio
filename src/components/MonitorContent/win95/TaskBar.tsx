import { motion } from "framer-motion";
import { Clock } from "./Clock";
import { Button } from "./Button";
import { DesktopAppProps } from "../DesktopScreen";
import { AiFillRobot } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { Computer3 } from "@react95/icons";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useStart } from "../../../context/StartContext";

type TaskBarProps = {
  desktopApps: DesktopAppProps[];
  openWindows: { [key: string]: boolean };
  minimizedWindows: { [key: string]: boolean };
  onMinimizeRestore: (id: string) => void;
  onActive: (id: string) => void;
  isActive: { [key: string]: boolean };
};

const TaskBar = ({
  desktopApps,
  openWindows,
  minimizedWindows,
  onMinimizeRestore,
  onActive,
  isActive,
}: TaskBarProps) => {
  const { start, setStart } = useStart();
  const [showTaskBarMenu, setShowTaskBarMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      transition={{ duration: 0, delay: 17 }}
      className={`bg-[#c3c7cb] border-t border-t-white w-full flex items-center justify-between gap-x-2 py-[3px] px-[3px] select-none`}
    >
      {/* Start Button */}
      <div ref={menuRef} className="relative">
        <div
          className={`absolute flex ${
            showTaskBarMenu ? "block z-10" : "hidden"
          } bottom-[2.1rem] -left-[1px] bg-[#c3c7cb] border border-[#868a8e] border-l-white border-t-white shadow-outline min-w-44 min-h-48`}
        >
          <p className="bg-[#7b7d7b] text-[#c3c7cb] flex flex-col items-start rotate-180 [writing-mode:vertical-rl] text-xl font-black font-ms px-2 py-1">
            McQueen95
          </p>
          <div className="flex flex-col-reverse w-full">
            <Button
              variant={"subtle"}
              className="h-9"
              onClick={() => {
                setShowTaskBarMenu(false);
                setStart(false);
              }}
            >
              <span className="flex items-center gap-x-1 text-sm">
                <i>
                  <Computer3 variant="32x32_4" />
                </i>
                Shutdown...
              </span>
            </Button>
            <span className="border border-white border-t-[#7b7d7b] border-l-[#7b7d7b] flex mx-1"></span>
            <Button
              variant={"subtle"}
              className="h-9"
              onClick={() => {
                setShowTaskBarMenu(false);
                window.open(
                  "https://github.com/CartValderama/portfolio-main",
                  "_blank"
                );
              }}
            >
              <span className="flex items-center gap-x-2 text-sm px-1">
                <i>
                  <FaSquareGithub className="text-2xl text-black" />
                </i>
                Source Code
              </span>
            </Button>{" "}
            <Button
              variant={"subtle"}
              className="h-9"
              onClick={() => {
                setShowTaskBarMenu(false);
                window.open(
                  "https://www.linkedin.com/in/cart-valderama/",
                  "_blank"
                );
              }}
            >
              <span className="flex items-center gap-x-2 text-sm px-1">
                <i>
                  <FaLinkedin className="text-2xl text-sky-700" />
                </i>
                LinkedIn
              </span>
            </Button>
          </div>
        </div>
        <Button
          variant={"default"}
          className="shadow-outline"
          onClick={() => setShowTaskBarMenu(!showTaskBarMenu)}
        >
          <span className="flex items-center gap-x-0.5">
            <AiFillRobot className="text-[.9rem] text-stone-900" />
            Menu
          </span>
        </Button>
      </div>

      {/* Taskbar Buttons for Open Windows */}
      <div className="w-full flex items-center justify-start gap-x-1">
        {desktopApps.reverse().map(({ id, Icon, label }) => {
          // Check if the app's window is open
          const isOpen = openWindows[id];
          if (!isOpen) return null;

          return (
            <Button
              key={id}
              variant={"tab"}
              size={"tab"}
              className={`${
                minimizedWindows[id] // If the window is minimized
                  ? "shadow-outline"
                  : isActive[id] // If the window is active
                  ? "bg-[#c3c7cb] border-[#868a8e] border-r-white border-b-white"
                  : "shadow-outline"
              }`}
              onClick={() => {
                if (minimizedWindows[id]) {
                  // If minimized, make it active and restore it
                  onActive(id);
                  onMinimizeRestore(id);
                } else if (!isActive[id]) {
                  // If not active, make it active
                  onActive(id);
                } else {
                  // If already active, minimize it
                  isActive[id] = false;
                  onMinimizeRestore(id);
                }
              }}
            >
              <Icon variant="16x16_4" /> {label}
            </Button>
          );
        })}
      </div>

      {/* Clock */}
      <Clock />
    </motion.div>
  );
};

export default TaskBar;
