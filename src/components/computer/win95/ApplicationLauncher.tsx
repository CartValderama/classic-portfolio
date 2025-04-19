import { PointerEvent } from "react";
import { useApplicationStore } from "../../../store/applicationStore";

type ApplicationLauncherProps = {
  id: string;
  label: string;
  url: string;
};

const ApplicationLauncher = ({ id, label, url }: ApplicationLauncherProps) => {
  const { handleOpenWindows } = useApplicationStore();

  const handleTouchScreen = (e: PointerEvent) => {
    if (e.pointerType === "touch" || e.pointerType === "pen") {
      e.preventDefault();
      handleOpenWindows(id);
    }
  };

  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center text-[0.9rem] cursor-pointer group focus:outline-none 3xl:[@media(min-height:860px)]:text-lg"
      onDoubleClick={() => handleOpenWindows(id)}
      onPointerDown={handleTouchScreen}
    >
      <div className="relative">
        <img
          src={url}
          alt={label}
          className="w-8 h-8 3xl:[@media(min-height:860px)]:w-10 3xl:[@media(min-height:860px)]:h-10 4xl:[@media(min-height:860px)]:w-12 4xl:[@media(min-height:860px)]:h-12"
        />
        <div className="absolute inset-0 bg-[#091558] opacity-0 group-focus:opacity-80" />
      </div>
      <span className="truncate w-14 group-focus:text-white group-focus:bg-[#091558] border-[.5px] border-dashed border-transparent group-focus:border-white 3xl:[@media(min-height:860px)]:w-18">
        {label}
      </span>
    </button>
  );
};

export default ApplicationLauncher;
