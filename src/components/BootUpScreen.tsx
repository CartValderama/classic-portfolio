import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { ReactElement } from "react";

const BootUpScreen = ({ children }: { children: ReactElement }) => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={start ? { display: "block" } : { display: "none" }}
      transition={{
        delay: start ? 0.5 : 0,
      }}
      className="absolute flex w-full h-full font-system opacity-85 blur-[.4px] bg-black text-neutral-200 select-none"
    >
      {children}
    </motion.div>
  );
};

export default BootUpScreen;
