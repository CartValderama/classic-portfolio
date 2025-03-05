import { ButtonMain } from "../components/Button";
import Monitor from "../components/Monitor";
import { useStart } from "../context/StartContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { start, setStart } = useStart();

  return (
    <div
      className={`flex sm:max-w-[85rem] justify-between 2xl:max-w-[96rem] items-center relative px-7 w-full`}
    >
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={
          start ? { x: -1300, opacity: 0, scale: 2 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.6, delay: 1 }}
        layout="position"
        className={`flex flex-col justify-center gap-y-5 w-1/2`}
      >
        <h1 className="font-geist text-4xl font-bold leading-11">
          Windows 95-Inspired Portfolio
        </h1>
        <div className="flex flex-col gap-y-2 font-geist sm:text-base xl:text-lg leading-8">
          <p>
            A Windows 95-inspired portfolio blending nostalgia with modern
            design. The interactive, retro-style interface allows you to explore
            my projects, skills, and background in a fun and engaging way. With
            its vintage look, this unique experience showcases my journey in web
            development.
          </p>
          <p>
            For a more accessible experience, you can switch to the old version
            of the portfolio by clicking the button below.
          </p>
        </div>
        <div className="flex gap-2">
          <ButtonMain
            variant={"default"}
            onClick={() => {
              setStart(!start);
            }}
            disabled={start}
          >
            Get Started
          </ButtonMain>
          <ButtonMain
            variant={"ghost"}
            onClick={() => {
              window.open(
                "https://cart-valderama-portfolio.vercel.app/",
                "_blank"
              );
            }}
            disabled={start}
          >
            Visit Accessible Version
          </ButtonMain>
        </div>
      </motion.div>
      <Monitor />
    </div>
  );
};

export default Desktop;
