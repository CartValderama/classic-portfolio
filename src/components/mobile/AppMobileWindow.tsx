import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useStart } from "../../context/StartContext";

type WindowProps = {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  isMinimized: boolean;
  onOpen: (value: boolean) => void;
  isActive: boolean;
  onActive: () => void;
  onMinimizeRestore: () => void;
  title: string;
  Icon: React.ComponentType<{
    className?: string;
    variant?: "32x32_4" | "16x16_4";
  }>;
  children: React.ReactNode;
};

const Window = ({
  constraintsRef,
  isOpen,
  onOpen,
  onActive,
  title,
  Icon,

  children,
}: WindowProps) => {
  const { start } = useStart();
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (!start) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const handleClose = () => {
    if (isMaximized) setIsMaximized(!isMaximized);
    onOpen(false);
  };

  return (
    <motion.div onClick={onActive}>
      <div
        className={`flexw-full h-full flex-col justify-between p-0.5 overflow-hidden bg-[#c3c7cb] border border-white border-r-[#868a8e] border-b-[#868a8e] shadow-outline `}
      >
        {/* Content */}
        {isOpen && (
          <div
            className={`w-full h-full flex flex-col relative overflow-auto
            `}
          >
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Window;
