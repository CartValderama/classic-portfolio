import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import SystemUnit from "./computer_parts/SystemUnit";
import Monitor from "./computer_parts/Monitor";
import { useBreakpoints } from "../../lib/hooks/useBreakpoints";

const Computer = () => {
  const { start } = useStart();
  const breakpoints = useBreakpoints();
  const transition = { duration: 0.5, delay: 1 };

  return (
    <motion.div
      initial={breakpoints}
      animate={
        start
          ? { width: "100%", height: "100%", marginTop: "11%" }
          : breakpoints
      }
      transition={transition}
      className={`flex flex-col items-center justify-center relative mb-[11%]`}
    >
      <Monitor />
      <SystemUnit />
    </motion.div>
  );
};

export default Computer;
