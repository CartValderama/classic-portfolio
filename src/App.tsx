import { useState } from "react";
import { Button } from "./components/Button";
import MonitorScreen from "./components/MainScreen";
import { RiShutDownLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import Computer from "./components/Shapes/Computer";

function App() {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <div
      className={`bg-transparent relative min-h-screen min-w-screen flex flex-col items-center justify-between text-lg leading-8`}
    >
      <MonitorScreen select={select} />
      <header
        className={`min-w-screen flex justify-center border-b border-dashed border-[#27272ab3] transition-transform duration-[1000ms] ease-linear ${
          select ? "scale-[0] transform-gpu" : "scale-100"
        }`}
        style={{
          transformOrigin: "center -100%",
        }}
      >
        <nav className="w-full sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#27272ab3] p-7 flex justify-between items-center">
          <h1 className="text-xl font-bold">Cart's Web Portfolio</h1>
          <Button variant={"ghost"} size={"icon"}>
            <i className="text-lg">
              <BiSun />
            </i>
          </Button>
        </nav>
      </header>
      <main className="flex flex-1">
        <section
          className={`flex justify-between gap-x-20 relative sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#27272ab3] p-7 ${
            select && "items-center -z-20 border-none"
          }`}
        >
          <div
            className={`flex flex-col justify-center gap-y-5 transition-all duration-[1500ms] ease-linear w-1/2 ${
              select ? "scale-[0] transform-gpu" : "scale-100"
            }`}
            style={{
              transformOrigin: "-100% center",
            }}
          >
            <h1 className="font-geist text-4xl font-bold leading-11">
              Windows 95-Inspired Portfolio
            </h1>

            <div className="flex flex-col gap-y-2 font-geist">
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
              <Button onClick={handleClick} disabled={select}>
                Get Started
              </Button>
              <Button variant="ghost">Visit Accessible Version</Button>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center  ${
              select
                ? "-z-50 opacity-0 scale-0 "
                : "2xl:scale-100 sm:scale-80 transform-gpu transition-all duration-[1500ms] ease-linear"
            }`}
          >
            <Computer />
          </div>
        </section>
      </main>
      <footer
        className={`min-w-screen flex justify-center border-t border-dashed border-[#27272ab3] transition-transform duration-[1500ms] ease-linear text-sm ${
          select ? "scale-[0] transform-gpu" : "scale-100"
        }`}
        style={{
          transformOrigin: "center 400%",
        }}
      >
        <div className="w-full sm:max-w-[85rem] 2xl:max-w-[96rem] border-x border-dashed border-[#27272ab3] p-7">
          <p>
            &copy; 2024 Built by Cart Antonio Valderama. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
