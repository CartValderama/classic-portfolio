import { useStart } from "../../context/StartContext";
import { apps } from "../../data/apps";
import { useApplicationStore } from "../../store/applicationStore";
import { motion } from "framer-motion";
import StatusBar from "./samsung/StatusBar";
import NotificationPhone from "./samsung/NotificationPhone";
import Wallpaper from "./samsung/Wallpaper";
import AppLibrary from "./samsung/AppLibrary";
import HomeScreenApps from "./samsung/HomeScreenApps";

const HomeScreen = () => {
  const { start } = useStart();
  const { activeWindow } = useApplicationStore();

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
          <AppLibrary />
          <HomeScreenApps />
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
