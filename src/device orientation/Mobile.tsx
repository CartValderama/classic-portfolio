import { useRef, useState } from "react";
import Window from "../components/MonitorContent/win95/Window";
const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="flex flex-col justify-between min-h-screen min-w-screen"
      ref={constraintsRef}
    >
      <button onClick={() => setIsOpen(true)} className="">
        open
      </button>
      {isOpen && (
        <Window
          constraintsRef={constraintsRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Mobile;
