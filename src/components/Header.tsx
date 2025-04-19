import { FaLaptopCode } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { useStart } from "../context/StartContext";
import { useThemeMonitor } from "../lib/hooks/useThemeMonitorChanges";

const Header = () => {
  const { start } = useStart();
  const isThemeChanging = useThemeMonitor();

  const colorTransition = isThemeChanging
    ? "transition-colors duration-1000"
    : "transition-none";

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: start ? 0 : 1 }}
      className={`fixed top-0 z-[999] w-full flex justify-center border-b border-dashed backdrop-blur-[2.5rem] shadow-black/[0.03] border-[#e4e4e7b3] dark:border-[#27272ab3] ${colorTransition}`}
      style={{
        transformOrigin: "center -300%",
      }}
    >
      <nav
        className={`w-full 4xl:max-w-[2260px] 3xl:max-w-[1860px] 2xl:max-w-[1460px] xl:max-w-[1260px] max-w-[1060px] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] mobile:px-8 px-4 py-5 flex justify-between items-center ${colorTransition}`}
      >
        <h1
          className={`flex items-center gap-x-2 font-bold ${colorTransition}`}
        >
          <FaLaptopCode className="text-3xl 3xl:text-4xl " />
          <span className="hidden md:flex text-xl 3xl:text-2xl">
            CartValderama
          </span>
        </h1>
        <div className="flex items-center gap-x-1 3xl:gap-x-3 ">
          <button
            type="button"
            className={`button-secondary h-10 w-10 ${colorTransition}`}
            onClick={() => {
              window.open(
                "https://github.com/CartValderama/classic-portfolio",
                "_blank"
              );
            }}
            disabled={start}
          >
            <BsGithub className="text-xl" />
          </button>

          <ThemeSwitch
            className={`button-secondary h-10 w-10 ${colorTransition}`}
          />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
