import BootUpScreen from "./BootUpScreen";
import DesktopScreen from "./DesktopScreen";

const MainScreen = () => {
  return (
    <div className="w-full h-full relative">
      <BootUpScreen />
      <DesktopScreen />
    </div>
  );
};

export default MainScreen;
