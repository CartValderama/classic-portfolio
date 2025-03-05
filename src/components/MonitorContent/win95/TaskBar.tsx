import { motion } from "framer-motion";
import { Clock } from "./Clock";

type TaskBarProps = {
  start: boolean;
  openWindows: { [key: string]: boolean };
  minimizedWindows: { [key: string]: boolean };
  onMinimizeRestore: (id: string) => void;
  onActive: (id: string) => void;
  isActive: { [key: string]: boolean };
};

const TaskBar = ({
  start,
  openWindows,
  minimizedWindows,
  onMinimizeRestore,
  onActive,
  isActive,
}: TaskBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      className={`bg-[#c3c7cb] border-t border-t-white w-full flex justify-between gap-x-2 p-[2px]`}
    >
      {/* Start Button */}
      <button>start</button>

      {/* Taskbar Buttons for Open Windows */}
      <div className="w-full flex justify-start gap-x-2">
        {Object.entries(openWindows).map(([id, isOpen]) => {
          if (!isOpen) return null;

          return (
            <button
              key={id}
              className={`px-1 rounded-sm text-sm ${
                minimizedWindows[id]
                  ? "bg-gray-300"
                  : isActive[id]
                  ? "bg-sky-500"
                  : "bg-gray-300"
              }`}
              onClick={() => {
                if (minimizedWindows[id]) {
                  onActive(id);
                  onMinimizeRestore(id);
                } else if (!isActive[id]) {
                  onActive(id);
                } else {
                  isActive[id] = false;
                  onMinimizeRestore(id);
                }
              }}
            >
              {id}
            </button>
          );
        })}
      </div>

      {/* Clock */}
      <Clock />
    </motion.div>
  );
};

export default TaskBar;
