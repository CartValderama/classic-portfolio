import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { useThemeMonitor } from "../lib/hooks/useThemeMonitorChanges";

const Footer = () => {
  const { start } = useStart();
  const isThemeChanging = useThemeMonitor();

  const colorTransition = isThemeChanging
    ? "transition-colors duration-1000"
    : "transition-none";

  return (
    <motion.footer
      initial={{ opacity: 1, y: 0 }}
      animate={start ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: start ? 0 : 1 }}
      className={`absolute bottom-0 w-full flex justify-center items-center border-y border-dashed text-xs  lg:text-sm 3xl:text-base border-[#e4e4e7b3] dark:border-[#27272ab3] ${colorTransition}`}
      style={{
        transformOrigin: "left 300%",
      }}
    >
      <div
        className={`w-full 4xl:max-w-[2260px] 3xl:max-w-[1860px] 2xl:max-w-[1460px] xl:max-w-[1260px] max-w-[1060px] border-x border-dashed font-normal mobile:px-8 px-4 py-5 text-[#71717a] dark:text-white border-[#e4e4e7b3] dark:border-[#27272ab3] ${colorTransition}`}
      >
        <p className={`${colorTransition}`}>
          &copy; 2024 Built by Cart Antonio Valderama. The source code is
          available on Github
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
