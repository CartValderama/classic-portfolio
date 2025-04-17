import { useDragControls, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaRegWindowMaximize,
  FaRegWindowRestore,
  FaXmark,
} from "react-icons/fa6";
import { MdMinimize } from "react-icons/md";
import { useStart } from "../../../context/StartContext";
import { useApplicationStore } from "../../../store/AppStore/ApplicationStore";
import { AppID } from "../../../lib/type";

type WindowProps = {
  id: AppID;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  title: string;
  icon: string;
  iWidth: number;
  iHeight: number;
  isResize: boolean;
  children: React.ReactNode;
};

const Window = ({
  id,
  constraintsRef,
  title,
  icon,
  iWidth,
  iHeight,
  isResize,
  children,
}: WindowProps) => {
  const { start } = useStart();
  const {
    openWindows,
    activeWindow,
    minimizedWindows,
    handleActiveWindow,
    handleMinimizeRestore,
    closeWindow,
  } = useApplicationStore();

  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: iWidth, height: iHeight });
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragControls = useDragControls();
  const x = useMotionValue(100 + Math.random() * 200);
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
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  useEffect(() => {
    const node = constraintsRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => {
      setSize({ width: iWidth, height: iHeight });
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [constraintsRef, iWidth, iHeight]);

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
    closeWindow(id);
  };

  const handleResize = (e: React.PointerEvent) => {
    if (isMaximized) return;

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

    const onPointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      moveEvent.stopPropagation();

      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const newWidth = startWidth + deltaX;
      const newHeight = startHeight + deltaY;

      const maxWidth = containerRect.width - x.get();
      const maxHeight = containerRect.height - y.get();

      setSize({
        width: Math.max(iWidth, Math.min(newWidth, maxWidth)),
        height: Math.max(iHeight, Math.min(newHeight, maxHeight)),
      });
    };

    const onPointerUp = () => {
      setIsResizing(false);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  };

  return (
    <motion.div
      drag={!isResizing && !isMaximized}
      dragElastic={0.05}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragControls={dragControls}
      dragListener={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ cursor: !isMaximized ? "grabbing" : "default" }}
      style={{
        x,
        y,
        width: isMaximized ? "100%" : size.width,
        height: isMaximized ? "100%" : size.height,
        position: "absolute",
        top: isMaximized ? 0 : undefined,
        left: isMaximized ? 0 : undefined,
        visibility:
          openWindows[id] && !minimizedWindows[id] ? "visible" : "hidden",
        zIndex:
          activeWindow === id && isMaximized
            ? 3
            : activeWindow === id
            ? 2
            : isMaximized
            ? 1
            : 0,
      }}
      onClick={() => handleActiveWindow(id)}
    >
      <div
        className={`flex h-full flex-col justify-between p-0.5 overflow-hidden bg-[#c3c7cb] border border-white border-r-[#868a8e] border-b-[#868a8e] shadow-outline touch-none`}
      >
        {/* Title bar */}
        <div
          className={`flex text-white items-center select-none justify-between px-1 py-0.5 mb-1 ${
            activeWindow === id ? "bg-[#000e7a]" : "bg-[#7f787f]"
          }`}
          onPointerDown={(e) => {
            if (
              !isMaximized &&
              (e.pointerType === "touch" || e.pointerType === "mouse")
            ) {
              handleActiveWindow(id);
              e.preventDefault();
              dragControls.start(e);
              setIsResizing(false);
            }
          }}
        >
          <h1 className="flex items-center gap-x-1.5 3xl:[@media(min-height:1060px)]:text-2xl">
            <img src={icon} className="w-4 h-4 3xl:w-5 3xl:h-5" />
            <span> {title}</span>
          </h1>
          <div className="flex items-center gap-x-1">
            <button
              className="win95-button 3xl:[@media(min-height:1060px)]:w-6 3xl:[@media(min-height:1060px)]:h-6"
              onClick={(e) => {
                e.stopPropagation();
                handleMinimizeRestore(id);
              }}
            >
              <MdMinimize className="text-black" />
            </button>
            <button
              className={`win95-button p-0.5 ${
                !isResize ? "hidden" : "flex"
              } 3xl:[@media(min-height:1060px)]:w-6 3xl:[@media(min-height:1060px)]:h-6`}
              onClick={(e) => {
                e.stopPropagation();
                handleMaximize();
                handleActiveWindow(id);
              }}
            >
              {isMaximized ? (
                <FaRegWindowRestore className="text-black text-[.88rem]" />
              ) : (
                <FaRegWindowMaximize className="text-black text-[.88rem]" />
              )}
            </button>
            <button
              className="win95-button p-0.5 3xl:[@media(min-height:1060px)]:w-6 3xl:[@media(min-height:1060px)]:h-6"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              <FaXmark className="text-black text-[.88rem]" />
            </button>
          </div>
        </div>

        {/* Content */}
        {openWindows[id] && (
          <div
            className={`w-full h-full flex flex-col relative overflow-auto
            `}
          >
            <div
              className={`absolute w-full h-full -z-10 ${
                (isResizing || activeWindow !== id) &&
                "opacity-10 z-10 bg-white"
              } ${isDragging && "z-10"}`}
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
            onPointerDown={(e) => {
              handleResize(e);
              handleActiveWindow(id);
            }}
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
