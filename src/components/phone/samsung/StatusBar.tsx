import { useState, useEffect } from "react";
import { BsLightningChargeFill } from "react-icons/bs";

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

const StatusBar = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number>(100);
  const [isCharging, setIsCharging] = useState<boolean>(false);
  const [batterySupported, setBatterySupported] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator
        .getBattery()
        .then((battery: BatteryManager) => {
          updateBatteryInfo(battery);

          battery.addEventListener("levelchange", () =>
            updateBatteryInfo(battery)
          );
          battery.addEventListener("chargingchange", () =>
            updateBatteryInfo(battery)
          );

          return () => {
            battery.removeEventListener("levelchange", () =>
              updateBatteryInfo(battery)
            );
            battery.removeEventListener("chargingchange", () =>
              updateBatteryInfo(battery)
            );
          };
        })
        .catch((error) => {
          console.error("Error accessing battery API:", error);
          setBatterySupported(false);
        });
    } else {
      setBatterySupported(false);
    }

    if (!navigator.getBattery) {
      const interval = setInterval(() => {
        setBatteryLevel((prev) => Math.max(5, (prev - 1) % 100));
      }, 60000);
      return () => clearInterval(interval);
    }
  }, []);

  const updateBatteryInfo = (battery: BatteryManager) => {
    setBatteryLevel(Math.round(battery.level * 100));
    setIsCharging(battery.charging);
  };

  const getBatteryColor = (): string => {
    if (isCharging) return "bg-blue-400";
    if (batteryLevel > 60) return "bg-green-500";
    if (batteryLevel > 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getBatteryBorderColor = (): string => {
    if (isCharging) return "border-blue-400";
    if (batteryLevel > 60) return "border-green-500";
    if (batteryLevel > 20) return "border-yellow-500";
    return "border-red-500";
  };

  return (
    <div
      className={`w-full bg-black justify-end px-2 text-sm gap-x-2 py-1.5 z-20 flex border border-black`}
    >
      {/* Battery + Icons */}

      <div className="relative flex flex-col items-center mt-[1px]">
        <div className={`w-[4px] h-[2px] ${getBatteryColor()} rounded-t-sm`} />
        <div
          className={`w-3 h-4 border-[1px] ${getBatteryBorderColor()} flex flex-col justify-end relative `}
        >
          <div
            className={`w-full ${getBatteryColor()}`}
            style={{
              height: batterySupported ? `${batteryLevel}%` : "100%",
            }}
          ></div>
          {isCharging && (
            <BsLightningChargeFill className="absolute bottom-[1px] text-[.65rem]" />
          )}
        </div>
      </div>

      {/* Clock */}
      <div className="font-medium text-base p-0">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
};

export default StatusBar;
