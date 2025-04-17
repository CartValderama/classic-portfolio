import React, { Suspense } from "react";
import BootUpScreen from "./BootUpScreen";
import Loading from "../Loading";

const DesktopScreen = React.lazy(() => import("./DesktopScreen"));

const MainScreen = () => {
  return (
    <div className={`w-full h-full relative bg-black`}>
      <BootUpScreen />
      <Suspense fallback={<Loading />}>
        <DesktopScreen />
      </Suspense>
    </div>
  );
};

export default MainScreen;
