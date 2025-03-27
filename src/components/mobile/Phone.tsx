import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";

const Phone = () => {
  const { start } = useStart();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      layout="position"
      className={`flex w-full h-full flex-col items-center absolute top-0 left-0 ${
        start ? "z-10" : "-z-10"
      }`}
    >
      <h1>hello owrld</h1>
    </motion.div>
  );
};

export default Phone;
