import { experience } from "../../../data/experience";
import { selectMenuProps } from "../../../lib/type";
import ResumeDivider from "./divider/ResumeDivider";
import SocialsDivider from "./divider/SocialsDivider";

const Experience = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col max-w-2xl 3xl:[@media(min-height:1060px)]:max-w-3xl flex-1 gap-y-2 ${
        selectMenu === "Experience" ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="3xl:text-5xl text-4xl capitalize font-bold">
          My Work Experience
        </h1>
        <p>
          I've had the opportunity to work with companies that challenge me to
          grow, refine my skills, and contribute to meaningful projects. Here's
          a look at my experience.
        </p>
      </div>

      <ResumeDivider />

      <div className="flex flex-col gap-y-8 my-2">
        {experience.map(({ img, company, date, desc, outcomes }, idx) => (
          <div key={idx} className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <img
                src={img}
                alt="company logo"
                className="lg:w-14 lg:h-14 w-12 h-12"
              />
              <div className="flex flex-col justify-center">
                <h2 className="3xl:text-4xl text-3xl capitalize font-bold mr-2">
                  {company}
                </h2>
                <p className="3xl:text-base text-sm">{date}</p>
              </div>
            </div>
            <p>{desc}</p>
            <ul className="flex flex-col gap-y-1">
              {outcomes.map((outcome, idx) => (
                <li key={idx} className="ml-2">
                  <span className="font-bold text-xl">~</span> {outcome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SocialsDivider />
    </div>
  );
};

export default Experience;
