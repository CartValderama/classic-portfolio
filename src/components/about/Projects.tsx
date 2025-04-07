import { BsGithub, BsGlobe } from "react-icons/bs";
import { projects } from "../../data/staticData";
import ContactDivider from "./divider/ContactDivider";
import { selectMenuProps } from "./AboutMe";
import ResumeDivider from "./divider/ResumeDivider";

const Projects = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col max-w-xl flex-1 gap-y-2
          ${selectMenu === "Projects" ? "flex" : "hidden"}`}
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl capitalize font-bold">Projects I've Done</h1>
        <p>
          A collection of projects where I've applied my skills to build
          interactive and efficient web experiences.
        </p>
      </div>

      <ContactDivider />

      <div className="flex flex-col gap-y-6">
        {projects.map(
          ({ name, source, demo, img, topics, desc, figDesc }, idx) => (
            <div key={idx} className="flex flex-col gap-y-2">
              <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-1">
                <h2 className="text-2xl capitalize font-bold mr-2">{name}</h2>
                <div className="flex gap-x-4 capitalize text-sm">
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline flex items-center gap-x-0.5"
                  >
                    <BsGithub />
                    <span> source code</span>
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline flex items-center gap-x-0.5"
                  >
                    <BsGlobe />
                    <span>live demo</span>
                  </a>
                </div>
              </div>
              <ul className="flex flex-wrap gap-0.5">
                {topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="bg-black text-white font-light px-2 text-[.6rem] uppercase"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-y-1 mt-2">
                <img src={img} alt={name} />
                <p className="text-sm lg:text-sm text-center italic">
                  {figDesc}
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                {desc.map((data, idx) => (
                  <p key={idx}>{data}</p>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <ResumeDivider />
    </div>
  );
};

export default Projects;
