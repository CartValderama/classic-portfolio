import { motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";
import { DiAndroid } from "react-icons/di";

const AndroidBootUp = () => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={start ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.1, delay: 4 }}
      className="relative flex-1 flex flex-col gap-4 items-center justify-center mobile:[@media(max-height:450px)]:rotate-90"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        <DiAndroid className="text-7xl text-lime-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
        className="w-20 h-2.5 bg-gray-700 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
          className="h-full bg-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default AndroidBootUp;
