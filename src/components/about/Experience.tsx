import { selectMenuProps } from "./AboutMe";

const Experience = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`blur-[.4px] sepia-[20%] contrast-75 ${
        selectMenu === "Experience" ? "flex" : "hidden"
      }`}
    >
      <h1>This is exp</h1>
    </div>
  );
};

export default Experience;
