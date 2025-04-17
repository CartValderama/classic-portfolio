import { useStart } from "../../context/StartContext";
import React, { Suspense } from "react";
import MobileBootUpScreen from "./MobileBootUpScreen";
import Loading from "../Loading";

const HomeScreen = React.lazy(() => import("./HomeScreen"));

export type MainMobileScreenProps = {
  isShowApps: boolean;
  setShowApps: (value: boolean) => void;
  isHideStatus: boolean;
  setHideStatus: (value: boolean) => void;
};

const MainMobileScreen = ({
  isShowApps,
  setShowApps,
  isHideStatus,
  setHideStatus,
}: MainMobileScreenProps) => {
  const { start } = useStart();
  return (
    <div
      className={`w-full h-full relative ${!start && "select-none "} bg-black`}
    >
      <MobileBootUpScreen />
      <Suspense fallback={<Loading />}>
        <HomeScreen
          isShowApps={isShowApps}
          setShowApps={setShowApps}
          isHideStatus={isHideStatus}
          setHideStatus={setHideStatus}
        />
      </Suspense>
    </div>
  );
};

export default MainMobileScreen;
