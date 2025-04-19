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
  const { isShowApps, isHideStatus, setShowApps, setHideStatus } =
    usePhoneUIStore();
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
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: 7 }}
      className="flex h-full flex-col justify-between bg-black bg-cover bg-center text-white relative  mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:items-stretch "
    >
      <Wallpaper />
      <StatusBar />

      <div className="z-10 h-full flex flex-col justify-between relative mobile:[@media(max-height:450px)]:h-auto mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:items-stretch ">
        <NotificationPhone />

        <div className="p-4 h-full flex flex-col justify-between mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:h-auto mobile:[@media(max-height:450px)]:flex-row-reverse">
          <div
            className={`grid grid-cols-4 grid-rows-4 gap-x-3 gap-y-6 justify-items-center place-items-center mobile:[@media(max-height:450px)]:[direction:rtl] mobile:[@media(max-height:450px)]:grid-flow-col mobile:[@media(max-height:450px)]:gap-x-6 mobile:[@media(max-height:450px)]:gap-y-3 ${
              isHideStatus && "mobile:[@media(max-height:450px)]:mr-6"
            }  
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

          <div className="grid grid-cols-4 mobile:[@media(max-height:450px)]:grid-cols-1 mobile:[@media(max-height:450px)]:gap-x-0 mobile:[@media(max-height:450px)]:gap-y-3 ">
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
              style={
                "text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] text-white bg-sky-900 p-1.5 rounded-lg mobile:[@media(max-height:450px)]:rotate-90"
              }
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
