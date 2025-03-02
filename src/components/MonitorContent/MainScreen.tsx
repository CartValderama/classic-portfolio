import BootUpScreen from "./BootUpScreen";
import DesktopScreen from "./DesktopScreen";

const MainScreen = () => {
  return (
    <div className="w-full h-full relative .desktop-screen">
      <BootUpScreen />
      <DesktopScreen />
    </div>
  );
};

export default MainScreen;
