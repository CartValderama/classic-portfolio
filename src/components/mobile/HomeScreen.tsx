import { useStart } from "../../context/StartContext";
import { apps } from "../../data/staticData";
import { useApplicationStore } from "../../store/AppStore/ApplicationStore";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoAppsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MainMobileScreenProps } from "./MainMobileScreen";
import StatusBar from "./StatusBar";
import AboutMe from "../about/AboutMe";
import Wordle from "../games/wordle/Wordle";
import OldPorfolio from "../monitor/OldPortolio";
import Guide from "../Guide";
import Credits from "../Credits";
import Tictactoe from "../games/tictactoe/Tictactoe";

const windows = [
  { id: "wordle", component: <Wordle /> },
  { id: "about", component: <AboutMe /> },
  { id: "oldportfolio", component: <OldPorfolio /> },
  { id: "guide", component: <Guide /> },
  { id: "credits", component: <Credits /> },
  { id: "tictactoe", component: <Tictactoe /> },
];

const homeApp = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/cart-valderama/",
    HomeIcon: FaLinkedinIn,
    style: "text-white bg-sky-700 p-2 rounded-lg",
  },
  {
    label: "Github",
    url: "https://github.com/CartValderama/win95-portfolio",
    HomeIcon: FaGithub,
    style: "text-white bg-stone-900 p-1.5 rounded-lg",
  },
];

const HomeScreen = ({
  isShowApps,
  setShowApps,
  isHideStatus,
  setHideStatus,
}: MainMobileScreenProps) => {
  const { start } = useStart();
  const { activeWindow, handleOpenWindows } = useApplicationStore();

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: 8 }}
      className="flex h-full flex-col justify-between bg-black bg-cover bg-center text-white relative  mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:items-stretch "
    >
      {/* Background image - fixed at the back */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-200 ${
          isShowApps ? "opacity-30" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('https://i.imgur.com/V5xb8J1.jpeg')",
        }}
      ></div>

      <StatusBar isHideStatus={isHideStatus} />

      <div className="z-10 h-full flex flex-col justify-between relative mobile:[@media(max-height:450px)]:h-auto mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:items-stretch ">
        <div className="p-4 h-full flex flex-col justify-between mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:h-auto mobile:[@media(max-height:450px)]:flex-row-reverse">
          <div
            className={`${
              isShowApps ? "opacity-100" : "opacity-0 -z-10"
            } grid grid-cols-4 grid-rows-4 gap-x-3 gap-y-6 justify-items-center place-items-center mobile:[@media(max-height:450px)]:[direction:rtl] mobile:[@media(max-height:450px)]:grid-flow-col mobile:[@media(max-height:450px)]:gap-x-6 mobile:[@media(max-height:450px)]:gap-y-3`}
          >
            {apps.map(({ MobileIcon, label, id, iconStyle }) => (
              <button
                key={id}
                className="flex flex-col justify-center items-center cursor-pointer text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95 mobile:[@media(max-height:450px)]:flex-row"
                onClick={() => {
                  setHideStatus(true);
                  handleOpenWindows(id);
                }}
              >
                <MobileIcon
                  className={`text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] ${iconStyle} mobile:[@media(max-height:450px)]:rotate-90`}
                />
                <span className="text-xs mobile:[@media(max-height:450px)]:text-[0.5rem] mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
                  {label}
                </span>
              </button>
            ))}
            {homeApp.map(({ HomeIcon, url, style, label }, index) => (
              <a
                key={index}
                className="flex flex-col justify-center items-center cursor-pointer text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95 mobile:[@media(max-height:450px)]:flex-row"
                href={url}
                onClick={() => {}}
              >
                <HomeIcon
                  className={`text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] ${style} mobile:[@media(max-height:450px)]:rotate-90`}
                />
                <span className="text-xs mobile:[@media(max-height:450px)]:text-[0.5rem] mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-4 mobile:[@media(max-height:450px)]:grid-cols-1 mobile:[@media(max-height:450px)]:gap-x-0 mobile:[@media(max-height:450px)]:gap-y-3 ">
            {apps
              .filter(
                (app) =>
                  app.id !== "wordle" &&
                  app.id !== "tictactoe" &&
                  app.id !== "oldportfolio"
              )
              .map(({ MobileIcon, id, iconStyle }) => (
                <button
                  key={id}
                  className="flex flex-col justify-center items-center cursor-pointer transition-opacity duration-200 hover:opacity-80 active:scale-95 mobile:[@media(max-height:450px)]:flex-row-reverse"
                  onClick={() => {
                    setHideStatus(true);
                    handleOpenWindows(id);
                  }}
                >
                  <MobileIcon
                    className={`text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] ${iconStyle} mobile:[@media(max-height:450px)]:rotate-90`}
                  />
                </button>
              ))}

            <button
              className="flex flex-col justify-center items-center cursor-pointer transition-opacity duration-200 hover:opacity-80 active:scale-95 mobile:[@media(max-height:450px)]:flex-row-reverse"
              onClick={() => setShowApps(!isShowApps)}
            >
              {isShowApps ? (
                <AiFillHome className="text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] text-white bg-emerald-700 p-1.5 rounded-lg mobile:[@media(max-height:450px)]:rotate-90" />
              ) : (
                <IoAppsSharp className="text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] text-white bg-emerald-700 p-1 rounded-lg mobile:[@media(max-height:450px)]:rotate-90" />
              )}
            </button>
          </div>
        </div>

        {/* Wordle Window */}

        {windows.map(({ id, component }) => (
          <motion.div
            key={id}
            className="absolute inset-0 text-black overflow-auto [&::-webkit-scrollbar]:hidden"
            style={{
              zIndex: activeWindow === id ? 50 : 0,
              pointerEvents: activeWindow === id ? "auto" : "none",
            }}
            animate={{
              opacity: activeWindow === id ? 1 : 0,
              scale: activeWindow === id ? 1 : 0.5,
            }}
            transition={{ duration: 0.1 }}
          >
            {component}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomeScreen;
