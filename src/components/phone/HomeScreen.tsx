import { useStart } from "../../context/StartContext";
import { apps } from "../../data/apps";
import { links } from "../../data/links";
import { useApplicationStore } from "../../store/applicationStore";
import { motion } from "framer-motion";
import { IoAppsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { useNotification } from "../../context/NotifcationContext";
import { usePhoneUIStore } from "../../store/phoneUIStore";
import StatusBar from "./samsung/StatusBar";
import NotificationPhone from "./samsung/NotificationPhone";
import Wallpaper from "./samsung/Wallpaper";
import PhoneApp from "./samsung/PhoneApp";

const HomeScreen = () => {
  const { start } = useStart();
  const { activeWindow, handleOpenWindows } = useApplicationStore();
  const { isShowApps, setShowApps, setHideStatus } = usePhoneUIStore();
  const { showNotification } = useNotification();

  const handleApp = (id: string) => {
    setHideStatus(true);
    handleOpenWindows(id);
  };

  const handleRedirect = (label: string, url: string) => {
    showNotification({
      title: `Redirecting to ${label}`,
      message: `You will be redirected to a ${label} tab. Press OK to visit the link.`,
      type: "warning",
      action: () => window.open(url, "_blank"),
    });
  };

  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={
        start
          ? { visibility: "visible", zIndex: 100 }
          : { visibility: "hidden" }
      }
      transition={{ duration: 0, delay: start ? 7 : 0 }}
      className="flex h-full flex-col justify-between bg-black bg-cover bg-center text-white relative"
    >
      <Wallpaper />
      <StatusBar />

      <div className="z-10 h-full flex flex-col justify-between relative">
        <NotificationPhone />

        <div className="px-2 py-4 h-full flex flex-col justify-between">
          <div
            className={`grid grid-cols-4 grid-rows-4 gap-x-5 gap-y-6 justify-items-center place-items-center
              ${isShowApps ? "opacity-100" : "opacity-0 -z-10"} `}
          >
            {apps.map(({ Icon, label, id, style }) => (
              <PhoneApp
                key={id}
                label={label}
                style={style}
                Icon={Icon}
                action={() => handleApp(id)}
              />
            ))}
            {links.map(({ Icon, url, style, label }, index) => (
              <PhoneApp
                key={index}
                label={label}
                style={style}
                Icon={Icon}
                action={() => handleRedirect(label, url)}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-x-5">
            {apps
              .filter(
                (app) =>
                  app.id !== "wordle" &&
                  app.id !== "tictactoe" &&
                  app.id !== "oldportfolio"
              )
              .map(({ Icon, id, style }) => (
                <PhoneApp
                  key={id}
                  style={style}
                  Icon={Icon}
                  action={() => handleApp(id)}
                />
              ))}

            <PhoneApp
              style={"text-[3.2rem] text-white bg-sky-900 p-1.5 rounded-lg"}
              Icon={isShowApps ? AiFillHome : IoAppsSharp}
              action={() => setShowApps(!isShowApps)}
            />
          </div>
        </div>

        {apps.map(({ id, Component }) => (
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
            <Component />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomeScreen;
