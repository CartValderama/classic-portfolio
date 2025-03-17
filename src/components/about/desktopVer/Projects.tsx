import { projects } from "../../../data/projects";
import { selectMenuProps } from "./AboutMe";
import HeadDivider from "../divider/HeadDivider";
import ResumeDivider from "../divider/ResumeDivider";

const Projects = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-center max-w-2xl my-4 hyphens-auto
          ${selectMenu === "Projects" ? "flex" : "hidden"}`}
    >
      <p className="mb-2">3</p>
      <HeadDivider dateOnly={true} />

      <section className="flex flex-col gap-y-4 mb-4">
        {projects.map(
          ({ name, desc, figDesc, source, demo, topics, img }, idx) => (
            <article
              key={idx}
              className={`flex flex-col gap-y-2 text-justify border-t ${
                idx % 2 !== 0 && ""
              } ${idx === 0 && "border-t-0"}`}
            >
              <div className="grid grid-cols-3 gap-x-4">
                <div className="flex row-span-3 flex-col place-items-start justify-items-start">
                  <h3 className={`text-3xl py-2`}>{name}</h3>
                  <ul
                    className={`flex flex-wrap gap-0.5 w-full mb-1 ${
                      name === "Accessibility Portfolio" && "mb-2"
                    }  ${name === "Flashcard Application" && "mb-3"}`}
                  >
                    {topics?.map((topic, id) => (
                      <li
                        key={id}
                        className="bg-black px-2  text-white uppercase text-[.6rem] font-ms"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p>{desc?.[0]}</p>
                    <p>{desc?.[1]}</p>
                  </div>
                </div>

                <div
                  className={`col-start-2 col-span-2 my-3 row-start-1 flex flex-col items-center`}
                >
                  <img src={img} alt={name} className="mb-1" />
                  <p className="text-xs text-center text-stone-700">
                    {figDesc}
                  </p>
                </div>
                <p
                  className={`col-start-2 row-span-2 ${
                    name === "DungeonKeep Escape" && "mt-0.5"
                  } ${name === "Web Application" && "mt-1"}`}
                >
                  {desc?.[2]}
                </p>
                <p
                  className={` ${name === "DungeonKeep Escape" && "mt-0.5"} ${
                    name === "Web Application" && "mt-1"
                  }`}
                >
                  The source code for this project is available on my GitHub,{" "}
                  <a href={source} target="_blank" className="underline">
                    view the source code here
                  </a>
                  . I’ve also deployed the project on Vercel, and you can{" "}
                  <a href={demo} target="_blank" className="underline">
                    explore the live demo here
                  </a>
                  .
                </p>
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
