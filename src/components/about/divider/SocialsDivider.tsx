import { Earth } from "@react95/icons";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const SocialsDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-3">
      <Earth variant="32x32_4" />
      <div>
        <p className="text-lg font-semibold">Check out my socials!</p>
        <div className="flex items-center gap-x-4">
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center underline"
          >
            <FaSquareGithub />
            <span>See my other projects on Github</span>
          </a>
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center underline"
          >
            <FaLinkedin />
            <span>Connect with me on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialsDivider;
