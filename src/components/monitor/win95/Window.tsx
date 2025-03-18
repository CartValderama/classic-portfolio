import { useDragControls, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import {
  FaRegWindowMaximize,
  FaRegWindowRestore,
  FaXmark,
} from "react-icons/fa6";
import { MdMinimize } from "react-icons/md";
import { useStart } from "../../../context/StartContext";

type WindowProps = {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  isMinimized: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  onActive: () => void;
  onMinimizeRestore: () => void;
  title: string;
  Icon: React.ComponentType<{
    className?: string;
    variant?: "32x32_4" | "16x16_4";
  }>;
  iWidth: number;
  iHeight: number;
  isResize: boolean;
  children: React.ReactNode;
};

const Window = ({
  constraintsRef,
  isOpen,
  onOpen,
  isActive,
  onActive,
  isMinimized,
  onMinimizeRestore,
  title,
  Icon,
  iWidth,
  iHeight,
  isResize,

  children,
}: WindowProps) => {
  const { start } = useStart();
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: iWidth, height: iHeight });
  const [isResizing, setIsResizing] = useState(false);

  const dragControls = useDragControls();
  const x = useMotionValue(20 + Math.random() * 50);
  const y = useMotionValue(20 + Math.random() * 50);

  const [preMaximizePosition, setPreMaximizePosition] = useState({
    x: 0,
    y: 0,
  });
  const [preMaximizeSize, setPreMaximizeSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!start) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const handleMaximize = () => {
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

  const handleClose = () => {
    if (isMaximized) setIsMaximized(!isMaximized);

    setSize({ width: iWidth, height: iHeight });
    x.set(20 + Math.random() * 50);
    y.set(20 + Math.random() * 50);
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

      // Calculate the new width and height based on cursor movement
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const newWidth = startWidth + deltaX;
      const newHeight = startHeight + deltaY;

      // Ensure the new size stays within the container bounds
      const maxWidth = containerRect.width - 13 - x.get();
      const maxHeight = containerRect.height - 18 - y.get();

      setSize({
        width: Math.max(iWidth, Math.min(newWidth, maxWidth)),
        height: Math.max(iHeight, Math.min(newHeight, maxHeight)),
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
        visibility: isOpen && !isMinimized ? "visible" : "hidden", // Hide if minimized
        zIndex:
          isActive && isMaximized ? 3 : isActive ? 2 : isMaximized ? 1 : 0,
      }}
      onClick={onActive}
    >
      <div
        className={`flex h-full flex-col justify-between p-0.5 overflow-hidden bg-[#c3c7cb] border border-white border-r-[#868a8e] border-b-[#868a8e] shadow-outline `}
      >
        {/* Title bar */}
        <div
          className={`flex text-white items-center select-none justify-between px-1 py-0.5 mb-1 ${
            isActive ? "bg-[#000e7a]" : "bg-[#7f787f]"
          }`}
          onPointerDown={(e) => {
            dragControls.start(e);
            onActive();
          }}
          onMouseDown={() => setIsResizing(false)}
        >
          <h1 className="flex items-center gap-x-1">
            <Icon variant="16x16_4" />
            {title}
          </h1>
          <div className="flex items-center gap-x-1">
            <Button size={"icon"} onClick={onMinimizeRestore}>
              <MdMinimize className="text-black text-[.6rem]" />
            </Button>
            <Button
              size={"icon"}
              onClick={handleMaximize}
              className={`${!isResize && "hidden"}`}
            >
              {isMaximized ? (
                <FaRegWindowRestore className="text-black text-[.6rem]" />
              ) : (
                <FaRegWindowMaximize className="text-black text-[.6rem]" />
              )}
            </Button>
            <Button size={"icon"} onClick={handleClose}>
              <FaXmark className="text-black text-[.6rem]" />
            </Button>
          </div>
        </div>

        {/* Content */}
        {isOpen && (
          <div
            className={`w-full h-full flex flex-col relative overflow-auto
            `}
          >
            <div
              className={`absolute w-full h-full -z-10 ${
                isResizing && "opacity-50 z-10 bg-white"
              }`}
            ></div>
            {children}
          </div>
        )}

        {/* Resize corner */}
        <div
          className={` items-center gap-x-0.5 ${
            !isMaximized && isResize ? "flex mt-1" : "hidden"
          }`}
        >
          <div className="border h-6 w-4/6 border-white border-t-[#868a8e] border-l-[#868a8e] px-1 flex gap-x-1 items-center"></div>
          <div className="relative border h-6 w-2/6 border-white border-t-[#868a8e] border-l-[#868a8e] px-1 flex gap-x-1 items-center"></div>
          <div
            className="absolute bottom-0 right-0 w-[6px] h-2  cursor-nwse-resize"
            onMouseDown={handleResize}
          >
            <div className="relative">
              <span className="absolute top-[3px] right-[0px] h-[1px] w-[9px] bg-[#4e4949] rotate-135"></span>
              <span className="absolute top-[5px] right-[.3px] h-[1px] w-1 bg-[#565252] rotate-135"></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Window;
