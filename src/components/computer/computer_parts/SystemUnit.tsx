import { motion } from "framer-motion";
import { useBreakpoints } from "../../../lib/hooks/useBreakpoints";
import { useStart } from "../../../context/StartContext";
import Speaker from "./Speaker";
import SystemUnitButtons from "./SystemUnitButtons";
import Stand from "./Stand";

const SystemUnit = () => {
  const { start } = useStart();
  const breakpoints = useBreakpoints();

  const initialWidth = breakpoints.width;
  const initialHeight = parseInt(breakpoints.height) / 1.85 + "rem";

  const expandedWidth = "100%";
  const expandedHeight = parseInt(breakpoints.height) * 1.85 + "rem";

  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ width: initialWidth, height: initialHeight }}
        animate={
          start
            ? { width: expandedWidth, height: expandedHeight }
            : { width: initialWidth, height: initialHeight }
        }
        transition={{ duration: 0.5, delay: start ? 0 : 1 }}
        className="absolute flex flex-col items-center justify-center rounded-xs"
      >
        <Stand />

        <div className="w-[100%] h-[90%] bg-[#dbd49d] flex flex-col justify-center px-[3%] p-[1.5%] mt-[3%] relative rounded-xs">
          <div
            className="absolute w-[100%] h-[48.5%] -top-[48%] right-0"
            style={{
              background: "#aaa57d",
              clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
            }}
          />
          <div className="flex justify-between items-center h-full w-full">
            <motion.div
              initial={{ borderWidth: ".15rem" }}
              animate={
                start ? { borderWidth: ".4rem" } : { borderWidth: ".15rem" }
              }
              transition={{ duration: 0.5, delay: start ? 0 : 1 }}
              className="w-[50%] h-[50%] border-3 border-[#ece8c8] border-t-[#8d8969] border-l-[#817e62]"
            />
            <div className="w-[30%] h-[12%] bg-[#3d3a22] relative flex justify-center rounded" />
          </div>
          <div className="flex justify-between items-center h-full w-full ">
            <Speaker />
            <SystemUnitButtons />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemUnit;
