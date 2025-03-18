import { useEffect, useRef, useState } from "react";
import { Button } from "../../monitor/win95/Button";
import Home from "./Home";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Experience from "./Experience";
import { useStart } from "../../../context/StartContext";
import { aboutMeMenu } from "../../../data/aboutMenu";

export type selectMenuProps = {
  selectMenu: string;
};

const AboutMe = () => {
  const { start } = useStart();
  const [selectMenu, setSelectMenu] = useState("Home");
  const aboutMeContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!start) setSelectMenu("Home");
  }, [start]);

  useEffect(() => {
    if (aboutMeContentRef.current) {
      aboutMeContentRef.current.scrollTop = 0;
    }
  }, [selectMenu]);

  return (
    <div className="relative flex flex-col flex-1 overflow-auto px-0.5">
      <div className="h-6 border-b border-b-[#868a8e] flex items-center gap-x-4 px-1">
        {aboutMeMenu.map((menu, idx) => (
          <Button
            key={idx}
            variant={"subtle"}
            className=" lowercase"
            onClick={() => setSelectMenu(menu)}
          >
            <span className="underline uppercase">{menu[0]}</span>
            {menu.slice(1)}
          </Button>
        ))}
      </div>
      <div
        className="flex items-start justify-center flex-1 overflow-auto bg-white border border-white border-t-none border-l-[#868a8e] text-base leading-6 px-2 font-georgia"
        ref={aboutMeContentRef}
      >
        <Home selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
        <Introduction selectMenu={selectMenu} />
        <Projects selectMenu={selectMenu} />
        <Experience selectMenu={selectMenu} />
      </div>
    </div>
  );
};

export default AboutMe;
