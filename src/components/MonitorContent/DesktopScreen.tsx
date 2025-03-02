import { motion } from "framer-motion";
import { FaRegFolder } from "react-icons/fa";
import { useStart } from "../../context/StartContext";
import { Button, Cursor, Frame, TaskBar } from "@react95/core";
import { FaFistRaised } from "react-icons/fa";

const DesktopScreen = () => {
  const { start } = useStart();

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay: 21 }}
      className={`relative z-[999] top-0 flex w-full h-full flex-col justify-between leading-6 bg-[#196364] border-2 border-double border-[#2d5252] border-collapse font-ms`}
    >
      <motion.div
        key={start ? "start-true" : "start-false"}
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
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
      <div className="sticky">
        d
        <TaskBar />
      </div>
    </motion.div>
  );
};

export default DesktopScreen;
