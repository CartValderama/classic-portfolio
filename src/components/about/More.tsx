import { RxOpenInNewWindow } from "react-icons/rx";
import { certificates } from "../../data/staticData";
import { selectMenuProps } from "./AboutMe";
import HeadDivider from "./divider/HeadDivider";
import ContactDivider from "./divider/ContactDivider";

const More = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`flex-col max-w-xl flex-1 gap-y-2 ${
        selectMenu === "More" ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl capitalize font-bold">Some Extra Bits</h1>

        <p>
          If you've made it this far, thanks for sticking around! Here, I'll
          share a few extra things about myself.
        </p>
      </div>

      <HeadDivider dateOnly={false} />

      <div className="flex flex-col gap-y-2 my-2">
        <h2 className="text-2xl capitalize font-bold">languages i speak</h2>

        <p>
          I am fluent in Filipino (Tagalog) and proficient in English (US). In
          professional settings, I prefer to communicate in English. I also have
          B1-level proficiency in Norwegian, which I primarily use for reading
          important documents.
        </p>
      </div>

      <div className="flex flex-col gap-y-2 my-2">
        <h2 className="text-2xl capitalize font-bold">Certificates</h2>
        <p className="mb-2">
          Outside of academics, I have pursued additional learning through
          certifications from freeCodeCamp. These certifications have allowed me
          to refine my skills in web development.
        </p>
        <ul className="flex flex-col gap-y-2">
          {certificates.map(({ title, date, desc, url }, idx) => (
            <li key={idx} className="flex flex-col gap-y-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h3 className="font-medium text-lg">{title}</h3>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline flex items-center gap-x-0.5"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
                <p className="text-sm">{date}</p>
              </div>
              <p className="">{desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2 my-2">
        <h2 className="text-2xl capitalize font-bold">My Hobbies</h2>
        <div className="flex flex-col gap-y-2">
          <p>
            Outside of coding web interfaces, I have a strong interest in
            sports, especially basketball. Whether it’s playing pickup games or
            following the NBA, I’ve always enjoyed the sport.
          </p>

          <div className="flex flex-col items-center gap-y-1">
            <img src={"https://i.imgur.com/A1uwrAH.jpeg"} alt="" />
            <p className="text-xs lg:text-sm text-center italic">
              Figure 6: Filipino Basketball League in Trondheim, Norway
            </p>
          </div>

          <p>
            Moving to Norway, where basketball isn’t as popular, made it tough
            to keep playing at first. But after some searching, I was lucky to
            find a community of fellow Filipino players and join local leagues.
            It’s been a great way to stay active, meet people, and keep my love
            for the game alive.
          </p>
        </div>

        <p>
          Another thing I enjoy is barbecuing. I usually do it during the
          summer, but if I really crave it, I'll even barbecue during the cold
          Norwegian winter.
        </p>
      </div>

      <ContactDivider />
    </div>
  );
};

export default More;
