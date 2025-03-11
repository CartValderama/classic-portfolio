import { RxOpenInNewWindow } from "react-icons/rx";
import { projects } from "../../data/projects";
import { selectMenuProps } from "./AboutMe";
import ContactDivider from "./ContactDivider";
import { FaGithub } from "react-icons/fa6";
import ResumeDivider from "./ResumeDivider";

const Projects = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-start gap-y-4 max-w-xl border-t py-4 my-4 hyphens-auto
          ${selectMenu === "Projects" ? "flex" : "hidden"}`}
    >
      <section>
        <article className="flex flex-col gap-y-2">
          <h2 className="text-[3rem] font-gothic my-2">My Projects</h2>
          <p>
            Here are some of my notable projects, including both academic work
            and personal projects, showcasing the skills and technologies I've
            explored.
          </p>
        </article>
      </section>

      <ContactDivider />

      <section className="flex flex-col gap-y-10">
        {projects.map(
          ({ name, desc, figDesc, source, demo, topics, img }, idx) => (
            <article
              key={idx}
              className={`flex flex-col gap-y-2 text-justify ${
                idx % 2 !== 0 && ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-gothic ">{name}</h3>
                <div className="flex items-center gap-x-2">
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-x-1 items-center hover:underline transition-all"
                  >
                    <FaGithub />
                    <span className="capitalize hidden lg:block">
                      repository
                    </span>
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-x-1 items-center hover:underline transition-all"
                    >
                      <RxOpenInNewWindow />
                      <span className="capitalize hidden lg:block">
                        live demo
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <div
                  className={`flex flex-col items-center gap-y-2 ${
                    idx % 2 === 0 ? "float-right ml-4" : "float-left mr-4"
                  }`}
                >
                  <img src={img} alt={name} className="w-[25rem] mt-2" />
                  <p className="text-xs mb-1">{figDesc}</p>
                </div>

                <p>{desc}</p>
              </div>
              <ul className="flex gap-x-1">
                {topics?.map((topic, id) => (
                  <li
                    key={id}
                    className="bg-black px-3 text-white uppercase text-[.7rem]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </section>
      <ResumeDivider />
    </div>
  );
};

export default Projects;
