import { useDragControls, motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";

type WindowProps = {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  isMinimized: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  onActive: () => void;
  onMinimizeRestore: () => void;
  title: string;
  children: React.ReactNode;
};

const Window = ({
  constraintsRef,
  isOpen,
  isMinimized,
  onOpen,
  isActive,
  onActive,
  onMinimizeRestore,
  title,
  children,
}: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: 250, height: 200 });
  const [isResizing, setIsResizing] = useState(false);

  const dragControls = useDragControls();
  const x = useMotionValue(40 + Math.random() * 20);
  const y = useMotionValue(40 + Math.random() * 20);

  const [preMaximizePosition, setPreMaximizePosition] = useState({
    x: 0,
    y: 0,
  });
  const [preMaximizeSize, setPreMaximizeSize] = useState({
    width: 10,
    height: 10,
  });

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isMaximized) {
      setPreMaximizePosition({ x: x.get(), y: y.get() });
      setPreMaximizeSize({ width: size.width, height: size.height });
      x.set(0);
      y.set(0);
    } else {
      x.set(preMaximizePosition.x);
      y.set(preMaximizePosition.y);
      setSize(preMaximizeSize);
    }

    setIsMaximized(!isMaximized);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen(false);
  };

  const handleResize = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const container = constraintsRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const onMouseMove = (moveEvent: MouseEvent) => {
      moveEvent.preventDefault();
      moveEvent.stopPropagation();

      const newWidth = startWidth + (moveEvent.clientX - startX);
      const newHeight = startHeight + (moveEvent.clientY - startY);

      if (
        x.get() + containerRect.width * 0.18 + newWidth > containerRect.width ||
        y.get() + containerRect.height * 0.185 + newHeight >
          containerRect.height
      ) {
        return;
      }

      setSize({
        width: Math.max(200, Math.min(newWidth, containerRect.width)),
        height: Math.max(200, Math.min(newHeight, containerRect.height)),
      });
    };

    const onMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <motion.div
      drag={!isResizing && !isMaximized}
      dragElastic={0.05}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragControls={dragControls}
      dragListener={false}
      whileDrag={{ cursor: !isMaximized ? "grabbing" : "default" }}
      style={{
        x,
        y,
        width: isMaximized ? "100%" : size.width,
        height: isMaximized ? "100%" : size.height,
        position: "absolute",
        top: isMaximized ? 0 : undefined,
        left: isMaximized ? 0 : undefined,
        display: isOpen && !isMinimized ? "block" : "none", // Hide if minimized
        zIndex: isActive ? 100 : 99,
      }}
      onClick={onActive}
    >
      <div
        className={`flex h-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-md select-none ${
          isActive ? "border-blue-500" : ""
        }`}
      >
        {/* Title bar */}
        <div
          className={`flex h-10 items-center justify-between px-3 ${
            isActive ? "bg-blue-500" : "bg-gray-200"
          }`}
          onPointerDown={(e) => {
            dragControls.start(e);
            onActive();
          }}
          onMouseDown={() => setIsResizing(false)}
        >
          <p className="text-sm font-medium">{title}</p>
          <div className="flex space-x-2">
            <button
              onClick={onMinimizeRestore}
              className="flex h-5 w-5 items-center justify-center rounded-sm hover:bg-gray-300"
            >
              {isMinimized ? "+" : "-"}
            </button>
            <button
              onClick={handleMaximize}
              className="flex h-5 w-5 items-center justify-center rounded-sm hover:bg-gray-300"
            >
              +
            </button>
            <button
              onClick={handleClose}
              className="flex h-5 w-5 items-center justify-center rounded-sm hover:bg-gray-300"
            >
              x
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <p>This is a simple modal window with minimal styling.</p>
          <p className="mt-2">You can:</p>
          {children}
        </div>

        {/* Resize handle */}
        {!isMaximized && !isMinimized && (
          <div
            className="absolute bottom-0 right-0 h-6 w-6 cursor-nwse-resize"
            onMouseDown={handleResize}
          >
            <div className="h-0 w-0 border-b-8 border-r-8 border-gray-400"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Window;
