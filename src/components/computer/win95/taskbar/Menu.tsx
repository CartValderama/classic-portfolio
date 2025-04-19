import { useEffect, useRef, useState } from "react";
import {
  RiShutDownFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiListSettingsFill,
} from "react-icons/ri";
import { useNotification } from "../../../../context/NotifcationContext";
import { useStart } from "../../../../context/StartContext";
import TaskBarMenuItems from "./MenuItems";

const Menu = () => {
  const [showTaskBarMenu, setShowTaskBarMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { showNotification } = useNotification();
  const { setStart } = useStart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowTaskBarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShutDown = () => {
    setShowTaskBarMenu(false);
    showNotification({
      title: "Shutting Down",
      message:
        "This will shut down the computer. Are you sure you want to proceed?",
      type: "question",
      action: () => setStart(false),
    });
  };

  const handleRedirect = (link: string) => {
    setShowTaskBarMenu(false);
    showNotification({
      title: "Redirecting to Github",
      message:
        "You will be redirected to a new tab. Are you sure you want to visit this link?",
      type: "warning",
      action: () => {
        window.open(link, "_blank");
      },
    });
  };

  return (
    <div ref={menuRef} className="relative">
      <div
        className={`absolute flex ${
          showTaskBarMenu ? "block z-10" : "hidden"
        } bottom-9 3xl:[@media(min-height:1060px)]:bottom-12 -left-[1px] bg-[#c3c7cb] border border-[#868a8e] border-l-white border-t-white shadow-outline min-h-60 min-w-55 3xl:min-w-65`}
      >
        <p className="bg-[#7b7d7b] text-[#c3c7cb] flex flex-col items-start rotate-180 [writing-mode:vertical-rl] text-xl 3xl:[@media(min-height:1060px)]:text-3xl font-black font-ms px-2 py-1 3xl:[@media(min-height:1060px)]:px-4 3xl:[@media(min-height:1060px)]:py-2 ">
          ValderamaOS
        </p>
        <div className="flex flex-col-reverse w-full">
          <TaskBarMenuItems
            icon={<RiShutDownFill className="text-3xl text-red-950 " />}
            text="Shutdown..."
            action={handleShutDown}
          />
          <span className="border border-white border-t-[#7b7d7b] border-l-[#7b7d7b] flex mx-1" />
          <TaskBarMenuItems
            icon={<RiGithubFill className="text-3xl text-black" />}
            text="Source Code"
            action={() =>
              handleRedirect("https://github.com/CartValderama/win95-portfolio")
            }
          />
          <TaskBarMenuItems
            icon={<RiLinkedinBoxFill className="text-3xl text-sky-800" />}
            text="Let's Connect!"
            action={() =>
              handleRedirect("https://www.linkedin.com/in/cart-valderama/")
            }
          />
        </div>
      </div>
      <button
        type="button"
        className="win95-button shadow-outline px-2 3xl:[@media(min-height:1060px)]:py-1 flex items-center gap-x-1.5"
        onClick={() => setShowTaskBarMenu(!showTaskBarMenu)}
      >
        <RiListSettingsFill className="text-[1rem] text-stone-900 3xl:[@media(min-height:1060px)]:text-2xl" />
        <span className="text-xl 3xl:[@media(min-height:1060px)]:text-2xl">
          Menu
        </span>
      </button>
    </div>
  );
};

export default Menu;
