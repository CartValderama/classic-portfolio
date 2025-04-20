import { AnimatePresence, motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";
import { DiAndroid } from "react-icons/di";
import { useEffect, useState } from "react";

const AndroidBootUp = () => {
  const { start } = useStart();
  const [showContent, setContent] = useState(true);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContent(false);
    }, 6500);

    return () => {
      clearTimeout(contentTimer);
      setContent(true);
    };
  }, [start]);

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: start ? "flex" : "none" }}
      transition={{ delay: 1 }}
      className="flex flex-col items-center justify-center bg-black gap-6"
    >
      <AnimatePresence>
        {showContent && start && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: start ? 1 : 0 }}
              transition={{ delay: 1.1 }}
            >
              <DiAndroid className="text-7xl text-lime-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: start ? 1 : 0,
                width: start ? "160px" : 0,
              }}
              transition={{
                opacity: { delay: 2 },
                width: { delay: 2, duration: 0 },
              }}
              className="h-2.5 bg-gray-700 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: start ? "100%" : 0 }}
                transition={{
                  delay: 2.5,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="h-full bg-lime-500 rounded-full"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AndroidBootUp;
