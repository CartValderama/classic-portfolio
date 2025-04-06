import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import { DiAndroid } from "react-icons/di";

const MobileBootUpScreen = () => {
  const { start } = useStart();

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 1 }}
      animate={start ? { opacity: 0, zIndex: -10 } : { opacity: 1, zIndex: 10 }}
      transition={{
        duration: 0.1,
        delay: 9.5,
      }}
      className="z-10 absolute flex w-full h-full font-system opacity-85 text-xl blur-[.4px]  text-neutral-200"
    >
      {/* Boot up screen */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={start ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.1, delay: 7 }}
        className="relative flex-1 flex items-center justify-center p-5"
      >
        {/* Loading Bar Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <DiAndroid className="text-7xl text-lime-500" />

          {/* Loading Bar - 6 seconds duration */}
          <div className="w-20 h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 4, ease: "linear" }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.1,
          delay: 8,
        }}
        className={`w-full h-full flex flex-col justify-center items-center absolute font-system p-5 `}
      >
        <h1 className="">Welcome to My Personal Portfolio</h1>
        <p className="">Version 2.0 - February 2025</p>
      </motion.div>
    </motion.div>
  );
};

export default MobileBootUpScreen;
