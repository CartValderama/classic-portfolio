import { ButtonMain } from "./components/ButtonMain";
import ThemeSwitch from "../src/components/ThemeSwitch";
import { BsGithub } from "react-icons/bs";
import { useStart } from "../src/context/StartContext";
import { motion } from "framer-motion";
import Desktop from "./device orientation/Desktop";

const Layout = () => {
  const { start } = useStart();

  return (
    <div
      className={`min-h-screen min-w-screen flex-col items-center justify-between text-lg bg-[#fcfdfc] overflow-hidden dark:bg-[#09090b] dark:text-white flex default-scroll`}
    >
      {/* buffer for small scaled monitor */}
      <div className={`${!start && "mb-40 2xl:mb-30"}`}></div>
      {/* header */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
        className={`fixed z-[999] w-full flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear backdrop-blur-lg shadow-black/[0.03]`}
        style={{
          transformOrigin: "center -300%",
        }}
      >
        <nav className="w-full max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] px-4 md:px-8 py-5 flex justify-between items-center ">
          <h1 className="text-xl font-bold">Cart's Portfolio</h1>
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
        className={`flex items-center flex-col justify-between relative ${
          start && "my-40 2xl:my-50"
        }`}
      >
        {/* insert content here */}
        <Desktop />
      </main>
      {/* footer */}
      <motion.footer
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
        className={`w-full flex justify-center items-center border-t border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear text-sm ${
          !start && "mt-40 2xl:mt-30"
        }`}
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
