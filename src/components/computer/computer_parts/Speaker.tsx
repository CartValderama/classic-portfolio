import { motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";

const Speaker = () => {
  const { start, transition } = useStart();

  return (
    <div className="w-[50%] h-[70%] grid grid-cols-18 grid-rows-3 gap-x-1 ">
      {Array.from({ length: 54 }).map((_, index) => (
        <motion.div
          initial={{ fontSize: ".35rem" }}
          animate={start ? { fontSize: "1.2rem" } : { fontSize: ".35rem" }}
          transition={transition}
          key={index}
          className="text-[#948d4e] font-black"
        >
          o
        </motion.div>
      ))}
    </div>
  );
};

export default Speaker;
