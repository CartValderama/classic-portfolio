import { selectMenuProps } from "./AboutMe";
import HeadDivider from "../divider/HeadDivider";
import SocialsDivider from "../divider/SocialsDivider";

const Experience = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-center max-w-2xl my-4 hyphens-auto ${
        selectMenu === "Experience" ? "flex" : "hidden"
      }`}
    >
      <p className="mb-2">2</p>
      <HeadDivider dateOnly={true} />

      <section className="w-full flex flex-col gap-y-8 mb-4">
        <article className="grid mt-2 grid-cols-3 gap-x-4 text-justify">
          <h3 className="text-3xl my-2 capitalize">Forte Digital</h3>

          <div className="row-start-2">
            <p>
              Served as the primary frontend developer of bachelor group in
              developing a flashcard application for Forte Digital. The project
              began when we presented the idea in November 2023, and they were
              interested in{" "}
              <strong className="font-bold">
                exploring the potential use of AI
              </strong>{" "}
              in study sessions.
            </p>
            <div className="my-2">
              <img src="https://i.imgur.com/JCGTfPZ.jpeg" alt="" />
              <p className="text-center text-xs">
                Figure 2: Forte Digital logo
              </p>
            </div>
            <p>
              Development started from January to June 2024. In the end, we were
              abled to satisfy
            </p>{" "}
          </div>

          <div className="col-start-2 row-span-3 mt-1">
            <div>
              <p>
                Forte's requirements and also achieved the highest grade
                possible for our thesis. My contributions for this project were:
              </p>
              <p>
                <span className="mr-2">§</span>
                <strong className="font-bold">
                  Created sketches and design layouts
                </strong>
                , which helped speed up process of deciding which layout are we
                going to use for the project.
              </p>
              <p>
                <span className="mr-2">§</span>
                <strong className="font-bold">Designed a user test</strong> that
                enabled a detailed analysis of AI's impact on study sessions.
              </p>
              <p>
                <span className="mr-2">§</span>
                <strong className="font-bold">Led the team in research</strong>,
                which helped identifying the study modes that were integrated in
                the flashcard application.
              </p>
            </div>
            <h3 className="text-3xl my-2 capitalize">Nander Group</h3>
            <p>
              Completed a school mandatory internship with Nander Structural
              Engineering Group from January to February 2018 to gain hands-on
              experi-
            </p>
          </div>

          <div className="col-start-3 row-span-3 mt-2">
            <div className="mt-1 mb-2">
              <img src="https://i.imgur.com/EentFrs.png" alt="Nander logo" />
              <p className="text-center text-xs mt-1">Figure 3: Nander Logo</p>
            </div>
            <div>
              <p>
                -ence in a profesional work setting. Here are the things the I
                learned and contributed during my time in Nander:
              </p>
              <p>
                <span className="mr-2">§</span>
                <strong className="font-bold">Represented my group</strong>{" "}
                during meetings and was responsible for communicating progress
                between the company and my school's supervisor.
              </p>
              <p>
                <span className="mr-2">§</span>
                <strong className="font-bold">
                  Gained basic understading on how to operate AutoCAD
                </strong>{" "}
                by working and testing Nander's previous blueprint designs.
              </p>
            </div>
          </div>
        </article>
      </section>
      <SocialsDivider />
      <p className="mt-2">2</p>
    </div>
  );
};

export default Experience;
