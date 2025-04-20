import React, { Suspense } from "react";
import BootUpScreen from "../BootUpScreen";
import Loading from "../Loading";
import { useStart } from "../../context/StartContext";
import WindowsBootup from "./win95/WindowsBootup";

const DesktopScreen = React.lazy(() => import("./DesktopScreen"));

const MainScreen = () => {
  const { start } = useStart();

  return (
    <div className="w-full h-full relative bg-[#09090b]">
      <BootUpScreen>
        <WindowsBootup />
      </BootUpScreen>

      {start && (
        <Suspense fallback={<Loading />}>
          <DesktopScreen />
        </Suspense>
      )}
    </div>
  );
};

export default MainScreen;
