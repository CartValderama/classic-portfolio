import { selectMenuProps } from "./AboutMe";
import ContactDivider from "../divider/ContactDivider";
import ToolsDivider from "../divider/ToolsDivider";
import HeadDivider from "../divider/HeadDivider";

const Introduction = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col items-center max-w-2xl my-4 ${
        selectMenu === "Introduction" ? "flex" : "hidden"
      }`}
    >
      <section className="flex  items-center gap-x-2 mb-6">
        <h1 className="text-[5.5rem] mt-8 mb-4 font-bold font-chomsky text-center col-span-5 min-w-[60%]">
          The New Portfolio
        </h1>
      </section>

      <HeadDivider dateOnly={false} />

      <section className="flex flex-col hyphens-auto mb-4">
        <article className="grid grid-cols-3 gap-x-4">
          <h2 className="col-span-3 text-[3.1rem] leading-13 font-bold mt-2 capitalize text-center">
            a *little* bit about myself
          </h2>

          <div className="row-start-2 flex flex-col items-center text-justify">
            <p>
              Hello There! Welcome to my portfolio, and thank you for taking the
              time to explore it. I'm Cart Valderama, a{" "}
              <strong className="font-bold">frontend developer</strong> based in{" "}
              <strong className="font-bold">Oslo</strong>,{" "}
              <strong className="font-bold">Norway</strong>, seeking work
              opportunities.
            </p>
            <p>
              I like working on the frontend but I can handle some backend as
              well if needed. My approach to work mainly involves creating a web
              layout that is both simple and intuitive enough to accommodate a
              wide range of users. In order to backed this approach, I use my
              solid foundation in technologies such as <i>HTML</i>,
            </p>
          </div>

          <div className="col-start-2 row-span-2 text-justify">
            <div className="text-center mb-1">
              <img
                src="https://i.imgur.com/6VSZ344.jpeg"
                alt="picture of cart"
                className="pt-2 w-54 mb-0.5"
              />
              <p className="text-[.7rem]">
                Figure 1: My photo from Forte Digital.
              </p>
            </div>
            <p>
              <i>CSS</i>, <i>JavaScript</i>, <i>TypeScript</i>, and <i>Git</i>,
              along with experience with libraries and frameworks like{" "}
              <i>Tailwind</i>, <i>React</i>, <i>Bootstrap</i>, and <i>Vite</i>.
            </p>
            <p>
              This is actually the second version of my portfolio, as the first
              one too plain for others.
            </p>
          </div>

          <div className="row-start-2 row-span-1 col-start-3 text-justify">
            <p>
              So this time, I've added more interactivity and showcased some of
              my personality to create a more engaging experience and give a
              better sense of who I am, without being as boring as the previous
              one.
            </p>
            <p>
              I really hope you enjoy exploring this version of my personal
              portfolio as much as I enjoyed designing and creating it.
            </p>
            <p>
              If you have any questions about my portfolio or potential work
              opportunities, feel free to reach out via email at{" "}
              <a href="mailto:cartantonio200@gmail.com">
                cartantonio200@gmail.com
              </a>{" "}
              or send an SMS to 90883637.
            </p>
          </div>
        </article>

        <ToolsDivider />

        <article className="grid grid-cols-3 gap-x-4 text-justify ">
          <h3 className="col-span-1 text-3xl my-1">Education</h3>
          <div className="row-start-2">
            <p>
              My main educational journey began after moving to Norway. I had to
              repeat highschool because my senior highschool diploma from the
              Philippines was not recognized by universities in Norway.
            </p>
            <p>
              After obtaining the required general competence at Stabekk
              Videregående Skole in 2020, I continued my studies at Oslo
              Metropolitan University, where I pursued a{" "}
              <strong className="font-bold">Bachelor's Degree</strong> in{" "}
              <strong className="font-bold">Information Technology</strong> and
              graduated in 2024 .
            </p>
          </div>
          <div className="row-span-3">
            <p>
              Current, I'm taking my{" "}
              <strong className="font-bold">
                Master's Degree in Universal Design of ICT
              </strong>{" "}
              at the same institution.
            </p>
            <p>
              Outside of academics, I have completed certifications from
              freeCodeCamp, which are Web Responsive Design in 2023 and
              JavaScript Legacy (both the main and beta versions) in 2024.
            </p>
            <h3 className="text-3xl my-1">I'm Fluent In</h3>
            <p>
              I can speak Filipino (Tagalog) and am proficient in English (US).
              While I prefer to speak and converse in English in work, I have
              B1-level proficiency in Norwegian, which I
            </p>
          </div>
          <div className="row-span-3">
            <p> use mainly for reading important documents.</p>
            <h3 className="text-3xl my-1">My Hobbies</h3>
            <p>
              Outside of coding web interfaces, I have a strong interest in
              sports, especially basketball. Moving to Norway, a non-nasketball
              country, made it challenging to continue this hobby at first.
              Fortunately, I found and joined Filipino basketball leagues.
            </p>
            <p>
              Another thing I enjoy is barbecuing. I usually do it during the
              summer, but if I really crave it, I'll even barbecue during the
              cold Norwegian winter.
            </p>
          </div>
        </article>

        <article className="col-span-2 text-justify"></article>
      </section>
      <ContactDivider />
      <p>1</p>
    </div>
  );
};

export default Introduction;
