import { FaLaptopCode } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { useStart } from "../context/StartContext";

const Header = () => {
  const { start } = useStart();
  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 z-[999] w-full flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear backdrop-blur-[0.5rem] shadow-black/[0.03] bg-[#f9fafb] dark:bg-[#09090b] `}
      style={{
        transformOrigin: "center -300%",
      }}
    >
      <nav className="w-full 4xl:max-w-[2200px] 3xl:max-w-[1800px] 2xl:max-w-[1400px] max-w-[1200px] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] mobile:px-8 px-4 py-5 flex justify-between items-center ">
        <h1 className=" flex items-center gap-x-2 font-bold">
          <FaLaptopCode className="text-3xl 3xl:text-4xl " />
          <span className="hidden md:flex text-xl 3xl:text-2xl">
            CartValderama
          </span>
        </h1>
        <div className="flex items-center gap-x-1 3xl:gap-x-3">
          <button
            className="button-secondary h-10 w-10 "
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

          <ThemeSwitch className="button-secondary h-10 w-10" />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
