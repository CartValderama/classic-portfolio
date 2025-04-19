import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { ReactElement } from "react";

const BootUpScreen = ({ children }: { children: ReactElement }) => {
  const { start } = useStart();

  return (
    <motion.div
      key={start ? "start-true" : "start-false"}
      initial={{ opacity: 1 }}
      animate={start ? { opacity: 0, zIndex: -1 } : { opacity: 1, zIndex: 10 }}
      transition={{
        duration: 0.1,
        delay: 6,
      }}
      className="z-10 absolute flex w-full h-full font-system opacity-85 blur-[.4px] bg-black text-neutral-200"
    >
      {children}

      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.1,
          delay: 4.5,
        }}
        className={`w-full h-full flex flex-col justify-center items-center absolute leading-6 font-system p-5`}
      >
        <h1 className="text-2xl 3xl:[@media(min-height:1060px)]:text-4xl">
          Welcome to My Personal Portfolio
        </h1>
        <p className="text-lg 3xl:[@media(min-height:1060px)]:text-2xl">
          Version 2.0 - March 2025
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BootUpScreen;
