import { useEffect, useState } from "react";
import { AiOutlinePoweroff, AiOutlineRollback } from "react-icons/ai";
import { IoAppsSharp } from "react-icons/io5";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { LuRectangleHorizontal } from "react-icons/lu";

interface Slide {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: React.ReactNode;
}

const Guide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: Slide[] = [
    {
      icon: (
        <LuRectangleHorizontal className="text-8xl mobile:[@media(max-height:450px)]:text-7xl text-white" />
      ),
      title: "Home Button",
      description:
        "Press the center button at the bottom of the phone to instantly return to the home screen from any app. Your current app will remain open in the background.",
    },
    {
      icon: (
        <AiOutlineRollback className="text-8xl mobile:[@media(max-height:450px)]:text-7xl text-white" />
      ),
      title: "Back Button",
      description:
        "Press the button at the bottom-right of the phone to return to the previous screen. Note: This will close your current app and you may lose unsaved progress in games.",
    },
    {
      icon: (
        <AiOutlinePoweroff className="text-8xl mobile:[@media(max-height:450px)]:text-7xl text-white" />
      ),
      title: "Power Button",
      description:
        "Press the button on the bottom-left of the phone to turn off the device. This will return you to the landing page and close all apps.",
    },
    {
      icon: (
        <IoAppsSharp className="text-8xl mobile:[@media(max-height:450px)]:text-7xl text-white" />
      ),
      title: "App Drawer",
      description:
        "Tap the icon at the bottom-center of the phone to open the app drawer. This shows all available applications and lets you switch between them.",
    },
  ];

  const nextSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? slides.length - 1 : prev + 1
    );
  };

  const prevSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    if (isAnimating) return;
    const swipe =
      Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 200;

    if (swipe) {
      setIsAnimating(true);
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isAnimating) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-full w-full flex-col lg:gap-y-3 flex-1 lg:text-black text-white lg:bg-transparent bg-emerald-800 flex lg:p-1 p-4 overflow-auto mobile:[@media(max-height:450px)]:p-4">
      <div className="lg:px-2 lg:py-1 lg:border border-white border-l-[#868a8e] border-t-[#868a8e]">
        <p className="text-4xl mobile:[@media(max-height:450px)]:text-2xl lg:text-2xl font-bold capitalize lg:mt-0 mt-3 mobile:[@media(max-height:450px)]:mt-1">
          <span className="lg:block hidden">quick desktop guide</span>
          <span className="lg:hidden block lg:text-start text-center">
            mobile guide
          </span>
        </p>
      </div>

      <div className="lg:border h-full w-full border-white border-l-[#868a8e] border-t-[#868a8e] lg:px-2 lg:py-1 mobile:[@media(max-height:450px)]:text-xs">
        <div className="lg:hidden flex flex-col justify-between items-center h-full w-full relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.1 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="flex w-full h-full flex-col justify-center items-center "
            >
              <div className="flex flex-col items-center justify-center mobile:[@media(max-height:450px)]:max-w-[500px]">
                <h3 className="font-medium text-white text-3xl mb-2 mobile:[@media(max-height:450px)]:text-lg">
                  {slides[currentSlide].title}
                </h3>
                {slides[currentSlide].icon}
              </div>
              <p className="text-base text-center mt-2 mobile:[@media(max-height:450px)]:max-w-[500px]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-4 mobile:[@media(max-height:450px)]:max-w-[500px] w-full">
            <button
              onClick={prevSlide}
              className={`w-20 px-4 py-2 rounded bg-emerald-950 active:scale-90 transition-transform duration-300  font-medium ${
                currentSlide === 0 && "opacity-0"
              }`}
              disabled={currentSlide === 0 || isAnimating}
            >
              Prev
            </button>

            {/* Slide indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }
                  }}
                  className={`
                    w-1 h-1 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-emerald-500 w-1.5"
                        : "bg-gray-300"
                    } 
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`w-20 px-4 py-2 rounded bg-emerald-950 active:scale-90 transition-transform duration-300  font-medium 
                 ${currentSlide === slides.length - 1 && "opacity-0"}`}
              disabled={isAnimating || currentSlide === slides.length - 1}
            >
              Next
            </button>
          </div>
        </div>

        <ul className="lg:block hidden space-y-4 text-[1rem] leading-snug ml-1">
          <li>
            <span className=" lg:text-green-900">Double-click</span> apps to
            open (or <span className=" lg:text-green-900">single tap</span> on
            touch/mobile devices).
          </li>
          <li>
            <span className=" lg:text-amber-900">Resizable windows</span> have a
            drag handle at the{" "}
            <span className=" lg:text-amber-900">bottom-right corner</span>{" "}
            (this window is fixed-size).
          </li>
          <li>
            <span className=" lg:text-purple-900">Minimize</span>,{" "}
            <span className=" lg:text-purple-900">Maximize</span>, and{" "}
            <span className=" lg:text-purple-900">Close</span> buttons are in
            the top-right corner.
          </li>
          <li>
            <span className=" lg:text-[#000e7a]">Drag windows</span> by their
            title bar at the top.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;
