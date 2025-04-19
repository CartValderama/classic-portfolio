import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa6";

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
    <div className="border border-white border-t-[#868a8e] border-l-[#868a8e] px-1 flex gap-x-0.5 items-center 3xl:[@media(min-height:1060px)]:text-2xl 3xl:[@media(min-height:1060px)]:py-1">
      <FaBell className="text-xs 3xl:[@media(min-height:1060px)]:text-base text-stone-900" />
      {timer}
    </div>
  );
};
