import { motion } from "framer-motion";
import { BiBell } from "react-icons/bi";
import { FaFistRaised } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { useStart } from "../../context/StartContext";

const DesktopScreen = () => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start && { opacity: 1 }}
      transition={{ duration: 0.3, delay: 21 }}
      className={`relative z-[999] top-0 flex w-full h-full flex-col justify-between leading-6 bg-[#196364] border-2 border-double border-[#2d5252] border-collapse font-ms`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={start && { opacity: 1 }}
        transition={{ duration: 0.1, delay: 22.5 }}
        className="flex flex-col items-start gap-y-3 p-3 text-[#010101] text-sm"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <FaRegFolder className="text-4xl" />
            <span className="text-xs">Folder</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={start && { opacity: 1 }}
        transition={{ duration: 0.1, delay: 22.5 }}
        className="bg-[#bebebe] h-9 border-t border-[#fcfdfc] flex items-center justify-between px-[.2rem] text-sm"
      >
        <button className="border border-t-[#fcfdfc] border-l-[#fcfdfc] px-2 py-1 flex items-center justify-between gap-x-1 font-semibold text-[#010101]">
          <i>
            <FaFistRaised />
          </i>
          Start
        </button>
        <div className="border border-black border-b-[#fcfdfc] border-r-[#fcfdfc] px-2 py-1 text-[#010101] flex items-center gap-x-2">
          <BiBell />
          <span>4:50 AM</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DesktopScreen;
