import LandingIntro from "../components/LandingIntro";
import Computer from "../components/computer/Computer";
import { useStart } from "../context/StartContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { start } = useStart();

  return (
    <div
      className={`hidden lg:flex flex-row-reverse items-center relative w-full h-screen 4xl:max-w-[2260px] 3xl:max-w-[1860px] 2xl:max-w-[1460px] xl:max-w-[1260px] max-w-[1060px] min-h-[760px] px-8 font-geist`}
    >
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={
          start ? { x: -2000, opacity: 0, scale: 2 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, delay: start ? 0 : 1 }}
        layout="position"
        className={`absolute left-0 flex flex-col justify-center gap-y-4 3xl:gap-y-6 w-[55%] ml-8`}
      >
        <LandingIntro isMobileLayout={false} />
      </motion.div>
      <Computer />
    </div>
  );
};

export default Desktop;
