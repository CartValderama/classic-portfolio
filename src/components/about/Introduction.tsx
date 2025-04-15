import { education, techStack } from "../../data/staticData";
import ContactDivider from "./divider/ContactDivider";
import HeadDivider from "./divider/HeadDivider";
import { selectMenuProps } from "../../lib/type";

const Introduction = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col max-w-xl 3xl:max-w-3xl flex-1 gap-y-2 ${
        selectMenu === "Intro" ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl capitalize font-bold">get to know me</h1>

        <p>
          Hello There! Welcome to my portfolio, and thank you for taking the
          time to explore it. I'm Cart Valderama, a{" "}
          <strong className="font-bold">frontend developer</strong> based in{" "}
          <strong className="font-bold">Oslo</strong>,{" "}
          <strong className="font-bold">Norway</strong>, seeking work
          opportunities.
        </p>
      </div>

      <HeadDivider dateOnly={false} />

      <div className="flex flex-col gap-y-2 my-2">
        <h2 className="text-2xl capitalize font-bold">My Technologies</h2>
        <p>
          These are the tools and technologies I frequently use to build the
          frontend of web applications.
        </p>
        <ul className="flex flex-wrap gap-y-5 gap-x-7 mt-2">
          {techStack.map(({ svg, skill }, idx) => (
            <li key={idx} className="flex flex-col items-center gap-y-1">
              <span>{svg}</span>
              <span className="text-xs">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-2 my-2">
        <h2 className="text-2xl capitalize font-bold">My Education</h2>
        <p>
          My formal education in software development and web technologies has
          equipped me with the knowledge to build responsive, user-friendly, and
          visually appealing web applications.
        </p>
        <ul className="flex flex-col gap-y-3 mt-2">
          {education.map(({ title, date, desc }, idx) => (
            <li key={idx} className="flex flex-col">
              <div className="flex flex-col justify-between">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-sm">{date}</p>
              </div>
              <p className="mt-2">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <ContactDivider />
    </div>
  );
};

export default Introduction;
