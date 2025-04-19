import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useStart } from "../../../context/StartContext";

const WindowsBootup = () => {
  const { start } = useStart();
  const [currentStage, setCurrentStage] = useState(0);

  const bootMessages = [
    "Award Modular BIOS v4.50PG, An Energy Star Ally\nCopyright (C) 1984-95, Award Software, Inc.",
    "Version 3.0E3704\n\nPentium-S CPU at 100MHz\nMemory Test: 16384K OK",
    "Award Plug and Play BIOS Extension v1.0A\nCopyright (C) 1995, Award Software, Inc",
    "Engage turbo mode. Just kidding, We're On A 90s CPU.",
    "Detecting HDD Primary Master .... WDC AC34300L",
    "Detecting HDD Primary Slave ..... None",
    "Detecting HDD Secondary Master .. None",
    "All Systems Nominal. Probably.",
    "Please Be Patient, Or Don't.",
    "_",
  ];

  useEffect(() => {
    if (!start) {
      setCurrentStage(0);
      return;
    }

    const bootTimer = setTimeout(() => {
      setCurrentStage(1);
    }, 4000);

    const welcomeTimer = setTimeout(() => {
      setCurrentStage(2);
    }, 5500);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(welcomeTimer);
    };
  }, [start]);

  const formatMessage = (message: string) => {
    return message.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < message.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={start ? { display: "block" } : { display: "none" }}
      transition={{ delay: 1, duration: 0 }}
      className="relative flex-1 leading-7 p-5 h-full"
    >
      <AnimatePresence>
        {currentStage === 0 && start && (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full relative"
          >
            <img
              src="https://i.imgur.com/wA8i2DU.png"
              alt=""
              className="w-[20%] absolute top-0 right-0 backdrop-grayscale-75 blur-[.4px] grayscale-100"
            />

            {bootMessages.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.5 + index * 0.1,
                  duration: 0,
                }}
                className={`text-xl 3xl:[@media(min-height:1060px)]:text-3xl ${
                  index === bootMessages.length - 1 &&
                  "animate-loading absolute bottom-0 mb-5 text-4xl"
                } ${text.startsWith("Detecting") && "ml-5"}`}
              >
                {formatMessage(text)}
              </motion.p>
            ))}
          </motion.div>
        )}

        {currentStage === 1 && start && (
          <motion.div
            key="welcome-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0 }}
            className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 leading-6 font-system p-5"
          >
            <h1 className="text-2xl 3xl:[@media(min-height:1060px)]:text-4xl">
              Welcome to My Personal Portfolio
            </h1>
            <p className="text-lg 3xl:[@media(min-height:1060px)]:text-2xl">
              Version 2.0 - March 2025
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WindowsBootup;
