import { useStart } from "../../context/StartContext";
import HomeScreen from "./HomeScreen";
import MobileBootUpScreen from "./MobileBootUpScreen";

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
      <HomeScreen
        isShowApps={isShowApps}
        setShowApps={setShowApps}
        isHideStatus={isHideStatus}
        setHideStatus={setHideStatus}
      />
    </div>
  );
};

export default MainMobileScreen;
