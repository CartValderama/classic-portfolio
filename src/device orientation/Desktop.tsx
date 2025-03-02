import { ButtonMain } from "../components/Button";
import Monitor from "../components/Monitor";
import ThemeSwitch from "../components/ThemeSwitch";
import { BsGithub } from "react-icons/bs";
import { useStart } from "../context/StartContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { start, setStart } = useStart();

  return (
    <div
      className={`min-h-screen min-w-screen flex-col items-center justify-between text-lg bg-[#fcfdfc] overflow-hidden dark:bg-[#09090b] dark:text-white hidden lg:flex`}
    >
      <div className={`${!start && "sm:mb-40 2xl:mb-30"}`}></div>
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: -200 } : { opacity: 1, y: 0 }}
        className={`fixed z-[999] w-full flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear backdrop-blur-lg shadow-black/[0.03]`}
        style={{
          transformOrigin: "center -300%",
        }}
      >
        <nav className="w-full sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] px-8 py-5 flex justify-between items-center ">
          <h1 className="text-xl font-bold">Cart's Web Portfolio</h1>
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
      <main
        className={`flex items-center flex-col justify-between relative ${
          start && "sm:my-40 2xl:my-50"
        }`}
      >
        <div
          className={`flex sm:max-w-[85rem] justify-between 2xl:max-w-[96rem] items-center relative px-7 w-full`}
        >
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={
              start ? { x: -1300, opacity: 0, scale: 2 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.6, delay: 1 }}
            layout="position"
            className={`flex flex-col justify-center gap-y-5 w-1/2`}
          >
            <h1 className="font-geist text-4xl font-bold leading-11">
              Windows 95-Inspired Portfolio
            </h1>
            <div className="flex flex-col gap-y-2 font-geist sm:text-base xl:text-lg leading-8">
              <p>
                A Windows 95-inspired portfolio blending nostalgia with modern
                design. The interactive, retro-style interface allows you to
                explore my projects, skills, and background in a fun and
                engaging way. With its vintage look, this unique experience
                showcases my journey in web development.
              </p>
              <p>
                For a more accessible experience, you can switch to the old
                version of the portfolio by clicking the button below.
              </p>
            </div>
            <div className="flex gap-2">
              <ButtonMain
                variant={"default"}
                onClick={() => {
                  setStart(!start);
                }}
                disabled={start}
              >
                Get Started
              </ButtonMain>
              <ButtonMain
                variant={"ghost"}
                onClick={() => {
                  window.open(
                    "https://cart-valderama-portfolio.vercel.app/",
                    "_blank"
                  );
                }}
                disabled={start}
              >
                Visit Accessible Version
              </ButtonMain>
            </div>
          </motion.div>
          <Monitor />
        </div>
      </main>
      <motion.footer
        initial={{ opacity: 1, y: 0 }}
        animate={start ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
        className={`w-full flex justify-center items-center border-t border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear text-sm ${
          !start && "sm:mt-40 2xl:mt-30"
        }`}
        style={{
          transformOrigin: "left 300%",
        }}
      >
        <div className="w-full sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed font-normal border-[#e4e4e7b3] dark:border-[#27272ab3] px-8 py-5 text-[#71717a] dark:text-white">
          <p>
            &copy; 2024 Built by Cart Antonio Valderama. The source code is
            available on Github
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Desktop;
