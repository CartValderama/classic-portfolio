import { useEffect, useState } from "react";
import { BiBell } from "react-icons/bi";

export const Clock = () => {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const checkTime = (i: number) => {
      return i < 10 ? `0${i}` : i;
    };

    const interval = setInterval(() => {
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      setTimer(`${checkTime(h)}:${checkTime(m)}`);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white border-t-[#868a8e] border-l-[#868a8e] px-1 flex gap-x-1 items-center">
      <BiBell className="text-xs mt-0.5" />
      {timer}
    </div>
  );
};
