import { motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";

const SystemUnitButtons = () => {
  const { start, transition } = useStart();

  return (
    <div className="w-[40%] h-[40%] flex justify-end items-center gap-x-1">
      <div className="w-[30%] h-full flex gap-x-[15%] items-center">
        <div className="bg-red-800 w-[10%] h-[20%] rounded" />
        <div className="bg-orange-600 w-[10%] h-[20%] rounded" />
        <div className="bg-green-800 w-[10%] h-[20%] rounded" />
      </div>
      <motion.div
        initial={{ width: "1.5rem", height: "1.5rem", borderWidth: ".15rem" }}
        animate={
          start
            ? { width: "4rem", height: "4rem", borderWidth: ".35rem" }
            : { width: "1.5rem", height: "1.5rem", borderWidth: ".15rem" }
        }
        transition={transition}
        className="rounded-full border-2 border-[#ece8c8] border-t-[#99966f] border-r-[#ebe6d1] border-b-[#e6e1cb] border-l-[#999674]"
      />
    </div>
  );
};

export default SystemUnitButtons;
