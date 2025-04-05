import { useStart } from "../../context/StartContext";
import HomeScreen from "./HomeScreen";

const MainMobileScreen = () => {
  const { start } = useStart();
  return (
    <div
      className={`w-full h-full relative ${!start && "select-none bg-black"} `}
    >
      <HomeScreen />
    </div>
  );
};

export default MainMobileScreen;
