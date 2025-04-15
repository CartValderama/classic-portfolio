import { useEffect, useRef, useState } from "react";
import { Button } from "./monitor/win95/Button";
import Introduction from "./about/Introduction";
import Projects from "./about/Projects";
import Experience from "./about/Experience";
import { useStart } from "../context/StartContext";
import { aboutMeMenu } from "../data/staticData";
import More from "./about/More";

const AboutMe = () => {
  const { start } = useStart();
  const [selectMenu, setSelectMenu] = useState("Intro");
  const aboutMeContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!start) setSelectMenu("Intro");
  }, [start]);

  useEffect(() => {
    if (aboutMeContentRef.current) {
      aboutMeContentRef.current.scrollTop = 0;
    }
  }, [selectMenu]);

  return (
    <div className="relative flex flex-col flex-1 overflow-auto lg:px-0.5 ">
      <div className="bg-white flex justify-between lg:justify-start items-center max-w-xl w-full lg:gap-x-4 p-4 lg:p-0 3xl:text-2xl lg:bg-transparent border-b border-b-[#868a8e] select-none">
        {aboutMeMenu.map((menu, idx) => (
          <Button
            key={idx}
            variant={"subtle"}
            className={`lowercase ${menu === selectMenu && "underline"}`}
            onClick={() => setSelectMenu(menu)}
          >
            <span className="lg:underline uppercase">{menu[0]}</span>
            {menu.slice(1)}
          </Button>
        ))}
      </div>
      <div
        className="flex items-start justify-center flex-1 overflow-auto bg-white lg:border border-white border-t-none border-l-[#868a8e] p-4 font-geist 3xl:text-xl"
        ref={aboutMeContentRef}
      >
        <Introduction selectMenu={selectMenu} />
        <Projects selectMenu={selectMenu} />
        <Experience selectMenu={selectMenu} />
        <More selectMenu={selectMenu} />
      </div>
    </div>
  );
};

export default AboutMe;
