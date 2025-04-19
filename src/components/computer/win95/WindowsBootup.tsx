import { motion } from "framer-motion";
import { useStart } from "../../../context/StartContext";

const WindowsBootup = () => {
  const { start } = useStart();

  const bootMessages = [
    "Award Modular BIOS v4.50PG, An Energy Star Ally",
    "Copyright (C) 1984-95, Award Software, Inc.",
    "\n",
    "Version 3.0E3704",
    "\n",
    "Pentium-S CPU at 100MHz",
    "Memory Test: 16384K OK",
    "\n",
    "Award Plug and Play BIOS Extension v1.0A",
    "Copyright (C) 1995, Award Software, Inc",
    "Engage turbo mode. Just kidding, We're On A 90s CPU.",
    "Detecting HDD Primary Master .... WDC AC34300L",
    "Detecting HDD Primary Slave ..... None",
    "Detecting HDD Secondary Master .. None",
    "All Systems Nominal. Probably.",
    "Please Be Patient, Or Don't.",
    "_",
  ];

  const formatMessage = (message: string) => {
    return message.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < message.split("\n").length - 1 && <br />}{" "}
      </span>
    ));
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={start ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        duration: 0.1,
        delay: 4,
      }}
      className="relative flex-1 leading-7 p-5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0, delay: 1 }}
      >
        <img
          src="https://i.imgur.com/wA8i2DU.png"
          alt=""
          className="w-[20%] absolute top-0 right-0 mx-5 my-2 backdrop-grayscale-75 blur-[.4px] grayscale-100"
        />
      </motion.div>

      {bootMessages.map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.1,
            delay: index === 0 ? 1.5 : 1.5 + index * 0.1,
          }}
          className={`text-xl 3xl:[@media(min-height:1060px)]:text-3xl ${
            index === bootMessages.length - 1 &&
            "animate-loading absolute bottom-0 mb-5 text-4xl "
          } ${text.startsWith("Detecting") && "ml-5"}`}
        >
          {formatMessage(text)}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default WindowsBootup;
