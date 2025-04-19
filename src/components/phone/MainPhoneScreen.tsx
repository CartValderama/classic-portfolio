import { useStart } from "../../context/StartContext";
import React, { Suspense } from "react";
import Loading from "../Loading";
import BootUpScreen from "../BootUpScreen";
import AndroidBootUp from "./samsung/AndroidBootUp";

const HomeScreen = React.lazy(() => import("./HomeScreen"));

const MainPhoneScreen = () => {
  const { start } = useStart();
  return (
    <div
      className={`w-full h-full rounded-xs relative bg-black ${
        !start && "select-none"
      }`}
    >
      <BootUpScreen>
        <AndroidBootUp />
      </BootUpScreen>
      {start && (
        <Suspense fallback={<Loading />}>
          <HomeScreen />
        </Suspense>
      )}
    </div>
  );
};

export default MainPhoneScreen;
