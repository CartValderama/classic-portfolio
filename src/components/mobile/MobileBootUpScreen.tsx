import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import { DiAndroid } from "react-icons/di";

const MobileBootUpScreen = () => {
  const { start } = useStart();

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 1, zIndex: 10 }}
      animate={start ? { opacity: 0, zIndex: -10 } : { opacity: 1, zIndex: 10 }}
      transition={{
        duration: 0.1,
        delay: 7,
      }}
      className="z-10 absolute flex w-full h-full font-system opacity-85 text-xl text-neutral-200"
    >
      {/* Boot up screen */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={start ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.1, delay: 5 }}
        className="relative flex-1 flex flex-col gap-4 items-center justify-center mobile:[@media(max-height:450px)]:rotate-90"
      >
        {/* Android */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
        >
          <DiAndroid className="text-7xl text-lime-500" />
        </motion.div>

        {/* Loading Bar - 6 seconds duration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
          className="w-20 h-2.5 bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 3.7, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.1,
          delay: 5.5,
        }}
        className={`w-full h-full flex flex-col justify-center items-center absolute font-system p-5 mobile:[@media(max-height:450px)]:rotate-90`}
      >
        <h1>Welcome to My Personal Portfolio</h1>
        <p className="text-sm">Version 2.0 - February 2025</p>
      </motion.div>
    </motion.div>
  );
};

export default MobileBootUpScreen;
