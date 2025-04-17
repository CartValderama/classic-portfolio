import { motion } from "framer-motion";
import { Clock } from "./Clock";
import { AppProps } from "../../../lib/type";
import { useEffect, useRef, useState } from "react";
import { useStart } from "../../../context/StartContext";
import { useApplicationStore } from "../../../store/AppStore/ApplicationStore";
import { useNotification } from "../../../context/NotifcationContext";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiListSettingsFill,
  RiShutDownFill,
} from "react-icons/ri";

type TaskBarProps = {
  apps: AppProps[];
};

const TaskBar = ({ apps }: TaskBarProps) => {
  const { start, setStart } = useStart();
  const [showTaskBarMenu, setShowTaskBarMenu] = useState(false);
  const { showNotification } = useNotification();
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    openWindows,
    windowOrder,
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
          } bottom-9 3xl:[@media(min-height:1060px)]:bottom-12 -left-[1px] bg-[#c3c7cb] border border-[#868a8e] border-l-white border-t-white shadow-outline min-h-60 min-w-50`}
        >
          <p className="bg-[#7b7d7b] text-[#c3c7cb] flex flex-col items-start rotate-180 [writing-mode:vertical-rl] text-xl 3xl:[@media(min-height:1060px)]:text-3xl font-black font-ms px-2 py-1 3xl:[@media(min-height:1060px)]:px-4 3xl:[@media(min-height:1060px)]:py-2 ">
            ValderamaOS
          </p>
          <div className="flex flex-col-reverse w-full">
            <button
              className="flex p-2 gap-x-2 items-center hover:bg-[#000e7a] hover:text-white"
              onClick={() => {
                setShowTaskBarMenu(false);
                showNotification({
                  title: "Shutting Down",
                  message:
                    "This will shut down the computer. Are you sure you want to proceed?",
                  type: "question",
                  action: () => setStart(false),
                });
              }}
            >
              <RiShutDownFill className="text-3xl text-red-900 " />
              <span className="text-sm 3xl:[@media(min-height:1060px)]:text-xl">
                Shutdown...
              </span>
            </button>
            <span className="border border-white border-t-[#7b7d7b] border-l-[#7b7d7b] flex mx-1"></span>
            <button
              className="flex p-2 gap-x-2 items-center hover:bg-[#000e7a] hover:text-white"
              onClick={() => {
                setShowTaskBarMenu(false);
                showNotification({
                  title: "Redirecting to Github",
                  message:
                    "You will be redirected to a new tab. Are you sure you want to visit this link?",
                  type: "warning",
                  action: () => {
                    window.open(
                      "https://github.com/CartValderama/win95-portfolio",
                      "_blank"
                    );
                  },
                });
              }}
            >
              <RiGithubFill className="text-3xl text-black" />
              <span className="text-sm 3xl:[@media(min-height:1060px)]:text-xl">
                Source Code
              </span>
            </button>
            <button
              className=" flex p-2 gap-x-2 items-center hover:bg-[#000e7a] hover:text-white"
              onClick={() => {
                setShowTaskBarMenu(false);
                showNotification({
                  title: "Redirecting to LinkedIn",
                  message:
                    "You will be redirected to a new tab. Are you sure you want to visit this link?",
                  type: "warning",
                  action: () => {
                    window.open(
                      "https://www.linkedin.com/in/cart-valderama/",
                      "_blank"
                    );
                  },
                });
              }}
            >
              <RiLinkedinBoxFill className="text-3xl text-sky-800" />
              <span className="text-sm 3xl:[@media(min-height:1060px)]:text-xl">
                Connect With Me
              </span>
            </button>
          </div>
        </div>
        <button
          className="win95-button shadow-outline px-2 3xl:[@media(min-height:1060px)]:py-1 flex items-center gap-x-1.5"
          onClick={() => setShowTaskBarMenu(!showTaskBarMenu)}
        >
          <RiListSettingsFill className="text-[1rem] text-stone-900 3xl:[@media(min-height:1060px)]:text-2xl" />
          <span className="text-xl 3xl:[@media(min-height:1060px)]:text-2xl">
            Menu
          </span>
        </button>
      </div>

      {/* Taskbar Buttons for Open Windows */}
      <div className="w-full h-full flex items-baseline justify-start gap-x-1">
        {windowOrder
          .filter((id) => openWindows[id])
          .map((id) => {
            const app = apps.find((a) => a.id === id);
            if (!app) return null;

            const { url, label } = app;

            return (
              <button
                key={id}
                className={`bg-[#c3c7cb] text-black capitalize flex items-center cursor-pointer h-full min-w-0 flex-1 max-w-36 3xl:[@media(min-height:1060px)]:max-w-50 px-2 gap-1 ${
                  minimizedWindows[id]
                    ? "shadow-outline border border-[#868a8e] border-l-white border-t-white"
                    : activeWindow === id
                    ? "border border-white border-l-[#868a8e] border-t-[#868a8e]"
                    : "shadow-outline border border-white border-r-[#868a8e] border-b-[#868a8e]"
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
                <img src={url} className="w-4 h-4 3xl:w-5 3xl:h-5" />
                <span className="truncate 3xl:[@media(min-height:1060px)]:text-2xl">
                  {label}
                </span>
              </button>
            );
          })}
      </div>

      {/* Clock */}
      <Clock />
    </motion.div>
  );
};

export default TaskBar;
