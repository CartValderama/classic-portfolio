import { useStart } from "../../context/StartContext";
import BootUpScreen from "./BootUpScreen";
import DesktopScreen from "./DesktopScreen";

const MainScreen = () => {
  const { start } = useStart();
  return (
    <div className={`w-full h-full relative ${!start && "select-none"}`}>
      <BootUpScreen />
      <DesktopScreen />
    </div>
  );
};

export default MainScreen;
