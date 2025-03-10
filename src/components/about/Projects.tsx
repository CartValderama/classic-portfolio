import { selectMenuProps } from "./AboutMe";

const Projects = ({ selectMenu }: selectMenuProps) => {
  return (
    <div
      className={`blur-[.4px] sepia-[20%] contrast-75 ${
        selectMenu === "Projects" ? "flex" : "hidden"
      }`}
    >
      <h1>This is projects</h1>
    </div>
  );
};

export default Projects;
