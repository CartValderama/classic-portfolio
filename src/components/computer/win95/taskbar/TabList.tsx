import { apps } from "../../../../data/apps";
import { useApplicationStore } from "../../../../store/applicationStore";

const TabList = () => {
  const {
    openWindows,
    windowOrder,
    activeWindow,
    minimizedWindows,
    handleActiveWindow,
    handleMinimizeRestore,
  } = useApplicationStore();

  const tabStatusIndicator = (id: string) => {
    const baseClassNames =
      "bg-[#c3c7cb] text-black capitalize flex items-center cursor-pointer active:scale-95 active:outline h-full min-w-0 flex-1 max-w-36 3xl:[@media(min-height:1060px)]:max-w-50 px-2 gap-1";

    if (minimizedWindows[id]) {
      return `${baseClassNames} shadow-outline border border-[#868a8e] border-l-white border-t-white`;
    } else if (activeWindow === id) {
      return `${baseClassNames} border border-white border-l-[#868a8e] border-t-[#868a8e]`;
    } else {
      return `${baseClassNames} shadow-outline border border-white border-r-[#868a8e] border-b-[#868a8e]`;
    }
  };

  const handleTabClick = (id: string) => {
    if (minimizedWindows[id]) {
      handleActiveWindow(id);
      handleMinimizeRestore(id);
    } else if (activeWindow !== id) {
      handleActiveWindow(id);
    } else {
      handleMinimizeRestore(id);
    }
  };

  return (
    <div className="w-full h-full flex items-baseline justify-start gap-x-1">
      {windowOrder
        .filter((id) => openWindows[id])
        .map((id) => {
          const app = apps.find((a) => a.id === id);
          if (!app) return null;

          const { url, label } = app;

          return (
            <button
              type="button"
              key={id}
              className={tabStatusIndicator(id)}
              onClick={() => handleTabClick(id)}
            >
              <img src={url} className="w-4 h-4 3xl:w-5 3xl:h-5" />
              <span className="truncate 3xl:[@media(min-height:1060px)]:text-2xl">
                {label}
              </span>
            </button>
          );
        })}
    </div>
  );
};

export default TabList;
