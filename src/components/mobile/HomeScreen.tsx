import { apps } from "../../data/staticData";
import { useApplicationStore } from "../../store/AppStore/DesktopApplicationStore";

const HomeScreen = () => {
  const { handleOpenWindows } = useApplicationStore();

  return (
    <div className="bg-white w-full h-full text-black">
      <div className="flex gap-x-10 items-center flex-wrap">
        {apps.map(({ DesktopIcon, label, id }) => (
          <button
            key={id}
            className="bg-none shadow-none w-16 h-16 p-0 flex flex-col justify-center items-center leading-[1.1] text-[0.9rem] gap-[5px] hover:bg-white/10"
            onClick={() => handleOpenWindows(id)}
          >
            <DesktopIcon className="w-[3rem]" variant="32x32_4" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
