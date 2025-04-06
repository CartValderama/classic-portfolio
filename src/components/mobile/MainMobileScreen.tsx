import { useStart } from "../../context/StartContext";
import HomeScreen from "./HomeScreen";
import MobileBootUpScreen from "./MobileBootUpScreen";

export type MainMobileScreenProps = {
  isShowApps: boolean;
  setShowApps: (value: boolean) => void;
};

const MainMobileScreen = ({
  isShowApps,
  setShowApps,
}: MainMobileScreenProps) => {
  const { start } = useStart();
  return (
    <div
      className={`w-full h-full relative ${!start && "select-none "} bg-black`}
    >
      <MobileBootUpScreen />
      <HomeScreen isShowApps={isShowApps} setShowApps={setShowApps} />
    </div>
  );
};

export default MainMobileScreen;
