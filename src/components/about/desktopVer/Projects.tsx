import { projects } from "../../../data/projects";
import { selectMenuProps } from "./AboutMe";
import HeadDivider from "../divider/HeadDivider";
import ResumeDivider from "../divider/ResumeDivider";
import {
  BsCheck2Circle,
  BsGithub,
  BsGlobe,
  BsHammer,
  BsPeople,
} from "react-icons/bs";

const Projects = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-center max-w-2xl my-4 hyphens-auto
          ${selectMenu === "Projects" ? "flex" : "hidden"}`}
    >
      <p className="mb-2">3</p>
      <HeadDivider dateOnly={true} />

      <section className="flex flex-col gap-y-8 mb-4">
        {projects.map(
          (
            { name, desc, figDesc, source, demo, topics, img, status, solo },
            idx
          ) => (
            <article
              key={idx}
              className={`flex flex-col gap-y-2 text-justify border-t py-2 ${
                idx % 2 !== 0 && ""
              } ${idx === 0 && "border-t-0"}`}
            >
              <div className="grid grid-cols-3 gap-x-4">
                <div className="flex row-span-3 flex-col place-items-start justify-items-start">
                  <h3 className={`text-3xl py-2`}>{name}</h3>
                  <ul className={`flex flex-wrap gap-0.5 w-full mb-2`}>
                    {topics?.map((topic, id) => (
                      <li
                        key={id}
                        className="bg-black py-1 px-2 text-white uppercase text-xs font-ms"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="">
                    <p>{desc?.[0]}</p>
                    <p>{desc?.[1]}</p>
                  </div>
                </div>

                <div
                  className={`col-start-2 col-span-2 row-start-1 flex flex-col items-center justify-center h-82 w-full mt-4`}
                >
                  <img src={img} alt={name} className="h-full w-full" />
                  <p className="text-xs text-center text-stone-700 mt-1">
                    {figDesc}
                  </p>
                </div>

                <p className={`col-start-2 row-start-3 `}>{desc?.[2]}</p>
                <div className="col-start-3 row-start-3 flex flex-col gap-0.5 text-xs font-ms mt-2 mb-1">
                  <a
                    href={source}
                    target="_blank"
                    className="bg-black text-white px-2 py-[0.31rem] flex items-center justify-start gap-x-2 underline"
                  >
                    <BsGithub /> Click this for source code
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    className="bg-black text-white px-2 py-[0.31rem] flex items-center justify-start gap-x-2 underline"
                  >
                    <BsGlobe /> Click this to see demo
                  </a>
                  <p className="bg-black text-white flex px-2 py-[0.31rem] items-center justify-start gap-x-2">
                    <BsPeople /> {solo ? "Personal Project" : "Group Project"}
                  </p>
                  <p className="bg-black text-white px-2 py-[0.31rem] flex items-center justify-start ">
                    {status ? (
                      <span className="flex items-center gap-x-2">
                        <BsCheck2Circle /> Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-x-2">
                        <BsHammer /> Ongoing
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </article>
          )
        )}
      </section>
      <ResumeDivider />
      <p>3</p>
    </div>
  );
};

export default Projects;
