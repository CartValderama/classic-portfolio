import { apps } from "../../../data/apps";
import PhoneApp from "./PhoneApp";
import { usePhoneUIStore } from "../../../store/phoneUIStore";
import { useApplicationStore } from "../../../store/applicationStore";
import { AiFillHome } from "react-icons/ai";
import { IoAppsSharp } from "react-icons/io5";

const HomeScreenApps = () => {
  const { isShowApps, setShowApps, setHideStatus } = usePhoneUIStore();
  const { handleOpenWindows } = useApplicationStore();

  const handleApp = (id: string) => {
    setHideStatus(true);
    handleOpenWindows(id);
  };
  return (
    <div className="grid grid-cols-4 gap-x-5">
      {apps
        .filter(
          (app) =>
            app.id !== "wordle" &&
            app.id !== "tictactoe" &&
            app.id !== "oldportfolio"
        )
        .map(({ Icon, id, style }) => (
          <PhoneApp
            key={id}
            style={style}
            Icon={Icon}
            action={() => handleApp(id)}
          />
        ))}

      <PhoneApp
        style={"text-[3.2rem] text-white bg-sky-900 p-1.5 rounded-lg"}
        Icon={isShowApps ? AiFillHome : IoAppsSharp}
        action={() => setShowApps(!isShowApps)}
      />
    </div>
  );
};

export default HomeScreenApps;
