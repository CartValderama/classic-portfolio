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
        className={`fixed top-0 z-[999] w-full flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear backdrop-blur-[0.5rem] shadow-black/[0.03] bg-[#f9fafb] dark:bg-[#09090b]/70 `}
        style={{
          transformOrigin: "center -300%",
        }}
      >
        <nav className="w-full max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] px-4 md:px-8 py-5 flex justify-between items-center ">
          <h1 className="text-xl flex items-center gap-x-2 font-bold">
            <FaLaptopCode className="text-3xl md:text-3xl " />
            <span className="hidden md:flex"> CartValderama</span>
          </h1>
          <div className="flex items-center gap-x-1">
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
              className="text-base"
            >
              <i>
                <BsGithub />
              </i>
            </ButtonMain>

            <ThemeSwitch variant="ghost" size="icon" className="text-base" />
          </div>
        </nav>
      </motion.header>

      {/* main */}
      <main
        className={`flex min-h-svh lg:min-h-screen lg:min-w-screen items-center justify-center`}
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
        className={`absolute bottom-0 w-full flex justify-center items-center border-t border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear text-xs md:text-sm`}
        style={{
          transformOrigin: "left 300%",
        }}
      >
        <div className="w-full max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed font-normal border-[#e4e4e7b3] dark:border-[#27272ab3] px-4 md:px-8 py-5 text-[#71717a] dark:text-white">
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
