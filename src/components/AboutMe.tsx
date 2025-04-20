import { useEffect, useRef, useState } from "react";
import { useStart } from "../context/StartContext";
import { aboutMeMenu } from "../data/menu";
import Introduction from "./about/Introduction";
import Projects from "./about/Projects";
import Experience from "./about/Experience";
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
    <div className="relative flex flex-col flex-1 overflow-auto lg:px-0.5">
      <div className="bg-white flex justify-between lg:justify-start items-center w-full lg:gap-x-4 p-4 lg:p-0 lg:bg-transparent border-b border-b-[#868a8e] select-none">
        {aboutMeMenu.map((menu, idx) => (
          <button
            type="button"
            key={idx}
            className={`win95-select`}
            onClick={() => setSelectMenu(menu)}
          >
            <span
              className={`lg:underline uppercase ${
                menu === selectMenu && "underline"
              }`}
            >
              {menu[0]}
            </span>
            <span className={`${menu === selectMenu && "underline"}`}>
              {menu.slice(1)}
            </span>
          </button>
        ))}
      </div>
      <div
        className="flex items-start justify-center flex-1 overflow-auto bg-white lg:border border-white border-t-none border-l-[#868a8e] py-6 px-4 font-geist"
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
