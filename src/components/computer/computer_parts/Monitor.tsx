import { motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";
import { useBreakpoints } from "../../../lib/hooks/useBreakpoints";
import MainScreen from "../MainScreen";

const Monitor = () => {
  const { start, transition } = useStart();
  const breakpoints = useBreakpoints();

  const initialSize = breakpoints;

  const expandedWidth = "100%";
  const expandedHeight = parseInt(breakpoints.height) * 3.6 + "rem";

  return (
    <motion.div
      initial={initialSize}
      animate={
        start ? { width: expandedWidth, height: expandedHeight } : initialSize
      }
      transition={transition}
      className="bg-[#dbd49d] relative rounded-sm flex flex-col items-center justify-center z-10 

      [@media(min-height:1220px)]:[@media(max-height:1320px)]:max-w-[1960px] 

      [@media(min-height:1120px)]:[@media(max-height:1220px)]:max-w-[1796px] 

      [@media(min-height:1020px)]:[@media(max-height:1120px)]:max-w-[1560px] 

      [@media(min-height:900px)]:[@media(max-height:1020px)]:max-w-[1396px]

      [@media(max-height:900px)]:max-w-[1196px]"
    >
      <motion.div
        initial={{ width: "86%", height: "82%" }}
        animate={
          start
            ? { width: "89%", height: "86%" }
            : { width: "86%", height: "82%" }
        }
        transition={transition}
        className=" rounded-xl relative flex justify-center items-center"
      >
        <div className="absolute bg-[#a0926f] w-full h-full opacity-35 rounded-lg" />
        <motion.div
          initial={{ borderWidth: "0.3rem" }}
          animate={
            start ? { borderWidth: "0.8rem" } : { borderWidth: "0.3rem" }
          }
          transition={transition}
          className="absolute w-[99.5%] h-[99.5%] rounded border-t-[#847959] border-x-[#a0926f] border-b-transparent"
        >
          <div className="absolute w-[100%] h-[100%] border-2 border-[#534f33]">
            <MainScreen />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Monitor;
