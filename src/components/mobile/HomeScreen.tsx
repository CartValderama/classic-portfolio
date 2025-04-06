import { useStart } from "../../context/StartContext";
import { apps } from "../../data/staticData";
import { useApplicationStore } from "../../store/AppStore/DesktopApplicationStore";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaPowerOff } from "react-icons/fa6";
import { IoAppsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MainMobileScreenProps } from "./MainMobileScreen";
import { useEffect } from "react";
import StatusBar from "./StatusBar";
import Wordle from "../games/Wordle";
import AboutMe from "../about/AboutMe";

const homeApp = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cart-valderama/",
    HomeIcon: FaLinkedinIn,
    style: "text-white bg-sky-700 p-2 rounded-lg",
  },
  {
    name: "Github",
    url: "https://github.com/CartValderama/win95-portfolio",
    HomeIcon: FaGithub,
    style: "text-white bg-stone-900 p-1.5 rounded-lg",
  },
];

const HomeScreen = ({ isShowApps, setShowApps }: MainMobileScreenProps) => {
  const { start, setStart } = useStart();
  const { activeWindows, handleOpenWindows } = useApplicationStore();

  useEffect(() => {
    const activeWindow = Object.keys(activeWindows)
      .filter(
        (key) =>
          key !== "credits" && key !== "tictactoe" && key !== "oldportfolio"
      )
      .find((key) => activeWindows[key as keyof typeof activeWindows] === true);

    if (activeWindow) {
      setShowApps(true);
    } else {
      setShowApps(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWindows]);

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: 10 }}
      className="w-full h-full flex flex-col justify-between bg-black bg-cover bg-center text-white relative overflow-auto [&::-webkit-scrollbar]:hidden"
    >
      {/* Background image - fixed at the back */}
      <div
        className={`absolute inset-0 bg-black bg-cover bg-center transition-opacity duration-200 ${
          isShowApps ? "opacity-30" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('https://i.imgur.com/6pSOBUF.jpeg')",
        }}
      ></div>
      <div className="z-10 flex flex-col justify-between w-full h-full relative">
        <div className="w-full bg-black ">
          <StatusBar />
        </div>

        <div
          className={`${
            isShowApps ? "grid" : "hidden"
          } grid-cols-4 grid-rows-4 h-full  p-4`}
        >
          <button
            className="flex flex-col justify-center items-center text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95"
            onClick={() => {
              setStart(!start);
              setShowApps(false);
            }}
          >
            <FaPowerOff className="text-[3.2rem] text-white bg-red-700 p-2 rounded-lg" />
            <span>ShutDown</span>
          </button>
          {apps
            .filter(
              (app) =>
                app.id !== "credits" &&
                app.id !== "tictactoe" &&
                app.id !== "oldportfolio"
            )
            .map(({ MobileIcon, label, id, iconStyle }) => (
              <button
                key={id}
                className="flex flex-col justify-center items-center cursor-pointer text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95"
                onClick={() => handleOpenWindows(id)}
              >
                <MobileIcon className={`text-[3.2rem] ${iconStyle}`} />
                <span>{label}</span>
              </button>
            ))}
        </div>

        <div className="grid grid-cols-4 gap-x-3 p-4">
          <button
            className="flex flex-col place-items-center cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-100"
            onClick={() => {
              const url = "https://cart-valderama-portfolio.vercel.app/";

              if (url) {
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <span className="text-[1.9rem] text-white bg-stone-700 p-1 rounded-lg font-bold aspect-square uppercase">
              CA
            </span>
          </button>
          {homeApp.map(({ HomeIcon, url, style }, index) => (
            <button
              key={index}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200"
              onClick={() => {
                if (url) {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <HomeIcon className={`text-[3.2rem] ${style} `} />
            </button>
          ))}
          <button
            className="flex flex-col items-center cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-100"
            onClick={() => setShowApps(!isShowApps)}
          >
            {isShowApps ? (
              <AiFillHome className="text-[3.2rem] text-white bg-emerald-700 p-1.5 rounded-lg" />
            ) : (
              <IoAppsSharp className="text-[3.2rem] text-white bg-emerald-700 p-1 rounded-lg" />
            )}
          </button>
        </div>

        {Object.entries(activeWindows)
          .filter(([appId]) => appId !== "credits" && appId !== "tictactoe")
          .map(([appId, isActive]) => {
            if (!isActive) return null;

            return (
              <AnimatePresence key={appId}>
                {isShowApps && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute text-black w-full h-full"
                  >
                    {appId === "wordle" && <Wordle />}
                    {appId === "about" && <AboutMe />}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
      </div>
    </motion.div>
  );
};

export default HomeScreen;
