import { Button } from "../components/Button";
import Monitor from "../components/Monitor";
import Computer from "../components/Shapes/Computer";
import ThemeSwitch from "../components/ThemeSwitch";
import { BsGithub } from "react-icons/bs";
import { useStart } from "../context/StartContext";

const Desktop = () => {
  const { start, setStart } = useStart();

  return (
    <div
      className={`relative min-h-screen min-w-screen flex-col items-center justify-between text-lg leading-8 overflow-hidden bg-white dark:bg-[#09090b] dark:text-white hidden lg:flex`}
    >
      <Monitor />
      <header
        className={`fixed z-[999] min-w-screen flex justify-center border-b border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear backdrop-blur-lg shadow-black/[0.03] ${
          start ? "scale-[0] transform-gpu" : "scale-100"
        }`}
        style={{
          transformOrigin: "left -300%",
        }}
      >
        <nav className="w-full sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] px-8 py-5 flex justify-between items-center ">
          <h1 className="text-xl font-bold">Cart's Web Portfolio</h1>
          <div className="flex items-center gap-x-1">
            <Button
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
            </Button>

            <ThemeSwitch variant="ghost" size="icon" className="text-base" />
          </div>
        </nav>
      </header>
      <main className="flex flex-1 relative sm:py-[4rem] 2xl:py-24">
        <div
          className={`absolute top-0 h-full border-l border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-out ${
            start ? " scale-0 transform-gpu" : " scale-100"
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full border-r border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-out ${
            start ? " scale-0 transform-gpu" : "scale-100"
          }`}
        ></div>
        <section
          className={`flex justify-between relative sm:max-w-[85rem] 2xl:max-w-[96rem] p-8 ${
            start && "items-center border-none"
          }`}
        >
          <div
            className={`flex flex-col justify-center gap-y-5 transition-transform duration-[1500ms] ease-linear w-[55%] ${
              start ? "scale-0 transform-gpu" : "scale-100"
            }`}
            style={{
              transformOrigin: "-300% center",
            }}
          >
            <h1 className="font-geist text-4xl font-bold leading-11">
              Windows 95-Inspired Portfolio
            </h1>
            <div id="dosbox"></div>

            <div className="flex flex-col gap-y-2 font-geist sm:text-base xl:text-lg">
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
              <Button
                variant={"default"}
                onClick={() => setStart(true)}
                disabled={start}
              >
                Get Started
              </Button>
              <Button
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
              </Button>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center  ${
              start
                ? "-z-10 opacity-0 scale-50 "
                : "2xl:scale-90 sm:scale-80 transform-gpu transition-transform duration-[1500ms] ease-out"
            }`}
          >
            <Computer />
          </div>
        </section>
      </main>
      <footer
        className={`min-w-screen flex justify-center items-center border-t border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform duration-[1500ms] ease-linear text-sm ${
          start ? "scale-[0] transform-gpu" : "scale-100"
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
      </footer>
    </div>
  );
};

export default Desktop;
