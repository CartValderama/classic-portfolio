import { GiPowerLightning } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { useStart } from "../context/StartContext";
import { useThemeMonitor } from "../lib/hooks/useThemeMonitorChanges";

const Header = () => {
  const { start } = useStart();
  const isThemeChanging = useThemeMonitor();

  const colorTransition = isThemeChanging
    ? "transition-colors duration-500"
    : "transition-none";

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: start ? 0 : 1 }}
      className={`fixed top-0 z-[999] w-full flex justify-center backdrop-blur-[2.5rem]`}
      style={{
        transformOrigin: "center -300%",
      }}
    >
      <nav
        className={`w-full 4xl:max-w-[2260px] 3xl:max-w-[1860px] 2xl:max-w-[1460px] xl:max-w-[1260px] max-w-[1060px] px-4 lg:px-8 py-5 flex justify-between items-center`}
      >
        <h1
          className={`flex items-center gap-x-2 font-bold ${colorTransition}`}
        >
          <i
            className={`bg-[#B44819] text-[#f5f3c7] dark:bg-amber-50 dark:text-[#09090b] rounded-full p-2 ${colorTransition}`}
          >
            <GiPowerLightning className={`text-3xl 3xl:text-4xl  `} />
          </i>

          <span className="hidden md:flex text-2xl 3xl:text-3xl">
            CartValderama
          </span>
        </h1>
        <div className="flex items-center gap-x-1 3xl:gap-x-3 ">
          <button
            type="button"
            className={`button-secondary p-2 ${colorTransition}`}
            onClick={() => {
              window.open(
                "https://github.com/CartValderama/classic-portfolio",
                "_blank"
              );
            }}
            disabled={start}
          >
            <BsGithub className="text-2xl" />
          </button>

          <ThemeSwitch className={`button-secondary p-2 ${colorTransition}`} />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
