import { techStack } from "../../data/staticData";
import { selectMenuProps } from "./AboutMe";
import ContactDivider from "./ContactDivider";
import ResumeDivider from "./ResumeDivider";

const Introduction = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-center gap-y-4 max-w-xl border-t pt-4 my-4 ${
        selectMenu === "Introduction" ? "flex" : "hidden"
      }`}
    >
      <section className="flex flex-col gap-y-2">
        <h1 className="text-[3.6rem] my-4 font-bold font-gothic">
          Welcome to My Portfolio
        </h1>
        <p>
          Hello! Welcome to the second version of my web portfolio. After
          receiving feedback that the previous version lacked excitement and
          interactivity, I’ve created a more engaging and dynamic experience.
          Feel free to explore and check out the projects I’ve worked on.
        </p>
      </section>

      <ResumeDivider />

      <section className="grid grid-cols-4 gap-x-6 gap-y-3 hyphens-auto">
        <article className="col-span-3 row-span-3 flex flex-col gap-y-2">
          <h2 className="text-[3rem] font-gothic my-2">
            A Little Bit About Me
          </h2>
          <div className="">
            <div className="float-right flex flex-col items-center ml-4">
              <img
                src="https://i.imgur.com/6VSZ344.jpeg"
                alt="picture of cart"
                className="pt-2 w-54"
              />
              <p className="text-[.7rem]">
                Figure 1: My photo from Forte Digital.
              </p>
            </div>
            <div className="text-justify ">
              <p className="">
                Hi, I'm Cart Antonio Valderama,{" "}
                <u>
                  a frontend developer based in Oslo, Norway, currently seeking
                  work opportunities.
                </u>{" "}
                With a strong foundation in{" "}
                <u>HTML, CSS, JavaScript, React, and TypeScript,</u> I strive to
                create seamless, responsive, and inclusive design. I value
                simplicity and intuitive in my work, focusing on delivering
                solutions that are both efficient and accessible for most users.
                I'm continuously expanding my knowledge of modern web
                technologies while exploring areas like <u>web accessibility</u>{" "}
                and <u>performance optimization</u> to ensure a smooth digital
                and inclusive experience for wide range of users.
              </p>
            </div>
          </div>
        </article>

        <article className="row-span-2 text-justify">
          <h3 className="bg-black text-white px-2 mb-1">Certificates</h3>
          <p>
            I obtained freeCodeCamp certifications in{" "}
            <u>Responsive Web Design</u> and{" "}
            <u>
              Legacy JavaScript (<i>including the beta version</i>)
            </u>
            , further enhancing my skills in modern web development.
          </p>
        </article>

        <article className="row-span-1 text-justify">
          <h3 className="bg-black text-white px-2 mb-1">I Can Speak</h3>
          <p>
            I am fluent in Filipino and English (US), with a B1 level
            proficiency in Norwegian.
          </p>
        </article>

        <article className="col-span-4 text-justify">
          <fieldset className="border-y">
            <legend>
              <h3 className="text-3xl font-gothic pr-3">What I Normally Use</h3>
            </legend>
            <ul className="flex flex-wrap pt-2 pb-4">
              {techStack.map((tech, idx) => (
                <li key={idx} className="p-0.5">
                  {tech && (
                    <p
                      className="text-white p-0.5 px-2"
                      style={{ backgroundColor: "black" }}
                    >
                      {tech.skill}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </fieldset>
        </article>

        <article className="col-span-2 text-justify">
          <h3 className="text-3xl font-gothic mb-1">Education</h3>
          <p>
            My main educational journey began after moving to Norway, where I
            completed Voksneopplæring at Stabekk Videregående in 2020 to gain
            general competence, as my high school diploma from the Philippines
            was not recognized. I then pursued a{" "}
            <u>
              Bachelor's Degree in Information Technology at Oslo Metropolitan
              University
            </u>
            , graduating in 2024. Currently, I am continuing my studies with a{" "}
            <u>
              Master's Degree in Universal Design of ICT at the same institution
            </u>
            , where I learn more about accessiblity and inclusivity.
          </p>
        </article>

        <article className="col-span-2 text-justify">
          <h3 className="text-3xl font-gothic mb-1">More of Me</h3>
          <p>
            Outside of coding and developing user interfaces, I have a strong
            interest for sports, namely basketball, and have been fortunate to
            join several local basketball leagues. When I first moved to Norway,
            it was challenging to find places to play and people to team up
            with. However, after some time, I discovered Filipino leagues in
            Oslo, which made it much easier to connect with others who shared my
            love for the game and provided a great opportunity to stay active
            and engaged in the basketball community.
          </p>
        </article>
      </section>

      <ContactDivider />
    </div>
  );
};

export default Introduction;
