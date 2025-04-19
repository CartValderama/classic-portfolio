import { motion } from "framer-motion";
import { Clock } from "./Clock";
import { useStart } from "../../../context/StartContext";
import Menu from "./taskbar/Menu";
import TabList from "./taskbar/TabList";

const Taskbar = () => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0, delay: start ? 7 : 0 }}
      className={`bg-[#c3c7cb] border-t border-t-white w-full flex items-center justify-between gap-x-4 py-[3px] px-[3px] select-none`}
    >
      <Menu />
      <TabList />
      <Clock />
    </motion.div>
  );
};

export default Taskbar;
