import { useStart } from "../../context/StartContext";
import React, { Suspense } from "react";
import { HomeScreenProps } from "../../lib/type";
import MobileBootUpScreen from "./MobileBootUpScreen";
import Loading from "../Loading";

const HomeScreen = React.lazy(() => import("./HomeScreen"));

const MainMobileScreen = ({
  isShowApps,
  setShowApps,
  isHideStatus,
  setHideStatus,
}: HomeScreenProps) => {
  const { start } = useStart();
  return (
    <div
      className={`w-full h-full relative ${!start && "select-none "} bg-black`}
    >
      <MobileBootUpScreen />
      {start && (
        <Suspense fallback={<Loading />}>
          <HomeScreen
            isShowApps={isShowApps}
            setShowApps={setShowApps}
            isHideStatus={isHideStatus}
            setHideStatus={setHideStatus}
          />
        </Suspense>
      )}
    </div>
  );
};

export default MainMobileScreen;
