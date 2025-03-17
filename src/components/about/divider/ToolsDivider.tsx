import { techStack } from "../../../data/staticData";

const ToolsDivider = () => {
  return (
    <div>
      <fieldset className="border-y my-4">
        <legend>
          <h3 className="text-3xl pr-3">My Frontend Technology Tools</h3>
        </legend>
        <ul className="flex flex-wrap py-2 pb-4 text-xs">
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
    </div>
  );
};

export default ToolsDivider;
