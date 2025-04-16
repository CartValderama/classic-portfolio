import { ButtonMain } from "./components/ButtonMain";
import ThemeSwitch from "../src/components/ThemeSwitch";
import { BsGithub } from "react-icons/bs";
import { useStart } from "../src/context/StartContext";
import { motion } from "framer-motion";
import Desktop from "./device orientation/Desktop";
import Mobile from "./device orientation/Mobile";
import { FaLaptopCode } from "react-icons/fa6";

const Layout = () => {
  const { start } = useStart();

  return (
    <div
      className={`relative text-lg bg-[#f9fafb] overflow-hidden dark:bg-[#09090b] dark:text-white flex items-center default-scroll`}
    >
      {/* header */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className={`fixed top-0 z-[999] w-full flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear backdrop-blur-[0.5rem] shadow-black/[0.03] bg-[#f9fafb] dark:bg-[#09090b] `}
        style={{
          transformOrigin: "center -300%",
        }}
      >
        <nav className="w-full 3xl:max-w-[1800px] max-w-[1560px] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] mobile:px-8 px-4 py-5 flex justify-between items-center ">
          <h1 className=" flex items-center gap-x-2 font-bold">
            <FaLaptopCode className="text-3xl 3xl:text-4xl " />
            <span className="hidden md:flex text-xl 3xl:text-2xl">
              {" "}
              CartValderama
            </span>
          </h1>
          <div className="flex items-center gap-x-1 3xl:gap-x-3">
            <ButtonMain
              variant={"ghost"}
              size={"icon"}
              onClick={() => {
                window.open(
                  "https://github.com/CartValderama/latest-portfolio",
                  "_blank"
                );
              }}
              disabled={start}
              className="text-base 3xl:text-xl"
            >
              <i>
                <BsGithub />
              </i>
            </ButtonMain>

            <ThemeSwitch
              variant="ghost"
              size="icon"
              className="text-base 3xl:text-xl"
            />
          </div>
        </nav>
      </motion.header>

      {/* main */}
      <main
        className={`flex min-h-svh lg:min-h-screen min-w-screen items-center justify-center`}
      >
        {/* insert content here */}
        <Desktop />
        <Mobile />
      </main>

      {/* footer */}
      <motion.footer
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className={`absolute bottom-0 w-full flex justify-center items-center border-y border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear text-xs lg:text-sm 3xl:text-base`}
        style={{
          transformOrigin: "left 300%",
        }}
      >
        <div className="w-full 3xl:max-w-[1800px] max-w-[1560px] border-x border-dashed font-normal border-[#e4e4e7b3] dark:border-[#27272ab3] mobile:px-8 px-4 py-5 text-[#71717a] dark:text-white">
          <p>
            &copy; 2024 Built by Cart Antonio Valderama. The source code is
            available on Github
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
