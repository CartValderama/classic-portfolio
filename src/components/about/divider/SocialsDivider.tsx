import { Earth } from "@react95/icons";
import { FaLinkedin } from "react-icons/fa";

const SocialsDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-3 my-2">
      <Earth variant="32x32_4" />
      <div>
        <p className="font-medium">Check out my socials!</p>
        <a
          href=""
          target="_blank"
          className="flex gap-1 items-center underline"
        >
          <FaLinkedin />
          <span className="text-sm">Connect with me on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SocialsDivider;
