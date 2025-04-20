import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import Phone from "../components/phone/Phone";
import LandingIntro from "../components/LandingIntro";

const Mobile = () => {
  const { start } = useStart();

  return (
    <div
      className={`lg:hidden flex items-center justify-center mobile:px-8 px-4 min-h-[700px] `}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={start ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, delay: start ? 0.5 : 1.5 }}
        layout="position"
        className={`flex flex-col justify-center items-start mobile:items-center gap-y-4 w-full`}
      >
        <LandingIntro isMobileLayout={true} />
      </motion.div>
      <Phone />
    </div>
  );
};

export default Mobile;
