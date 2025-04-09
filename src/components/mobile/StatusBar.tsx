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

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Get actual battery information
  useEffect(() => {
    if (navigator.getBattery) {
      navigator
        .getBattery()
        .then((battery: BatteryManager) => {
          // Update state with current battery info
          updateBatteryInfo(battery);

          // Set up event listeners
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

    // Fallback simulation if battery API not supported
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
    <div className="w-full bg-white/2 flex justify-end px-4 text-white text-sm gap-x-2 py-1 mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:items-end mobile:[@media(max-height:450px)]:px-0 mobile:[@media(max-height:450px)]:gap-x-0 mobile:[@media(max-height:450px)]:py-4 mobile:[@media(max-height:450px)]:gap-y-2 mobile:[@media(max-height:450px)]:flex-col">
      {/* Battery + Icons */}

      <div className="relative flex flex-col items-center mt-[1px] mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:mt-0 mobile:[@media(max-height:450px)]:mr-[1px]">
        <div
          className={`w-[4px] h-[2px] ${getBatteryColor()} rounded-t-sm mobile:[@media(max-height:450px)]:w-[2px] mobile:[@media(max-height:450px)]:h-[4px] mobile:[@media(max-height:450px)]:rounded-t-none mobile:[@media(max-height:450px)]:rounded-r-sm`}
        />
        <div
          className={`w-3 h-4 border-[1px] ${getBatteryBorderColor()} flex flex-col justify-end relative mobile:[@media(max-height:450px)]:w-4 mobile:[@media(max-height:450px)]:h-3 mobile:[@media(max-height:450px)]:flex-row-reverse`}
        >
          <div
            className={`w-full ${getBatteryColor()} mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:h-full`}
            style={{
              width: batterySupported ? `${batteryLevel}%` : "100%",
            }}
          ></div>
          {isCharging && (
            <BsLightningChargeFill className="absolute bottom-[1px] text-[.65rem] mobile:[@media(max-height:450px)]:rotate-90 mobile:[@media(max-height:450px)]:bottom-0" />
          )}
        </div>
      </div>

      {/* Clock */}
      <div className="font-medium text-base p-0 mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
};

export default StatusBar;
