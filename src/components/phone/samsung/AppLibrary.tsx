import { useNotification } from "../../../context/NotifcationContext";
import { apps } from "../../../data/apps";
import { links } from "../../../data/links";
import { useApplicationStore } from "../../../store/applicationStore";
import { usePhoneUIStore } from "../../../store/phoneUIStore";
import PhoneApp from "./PhoneApp";

const AppLibrary = () => {
  const { isShowApps, setHideStatus } = usePhoneUIStore();
  const { handleOpenWindows } = useApplicationStore();
  const { showNotification } = useNotification();

  const handleRedirect = (label: string, url: string) => {
    showNotification({
      title: `Redirecting to ${label}`,
      message: `You will be redirected to a ${label} tab. Press OK to visit the link.`,
      type: "warning",
      action: () => window.open(url, "_blank"),
    });
  };

  const handleApp = (id: string) => {
    setHideStatus(true);
    handleOpenWindows(id);
  };

  return (
    <div
      className={`grid grid-cols-4 grid-rows-4 gap-x-5 gap-y-6 justify-items-center place-items-center
              ${isShowApps ? "opacity-100" : "opacity-0 -z-10"} `}
    >
      {apps.map(({ Icon, label, id, style }) => (
        <PhoneApp
          key={id}
          label={label}
          style={style}
          Icon={Icon}
          action={() => handleApp(id)}
        />
      ))}
      {links.map(({ Icon, url, style, label }, index) => (
        <PhoneApp
          key={index}
          label={label}
          style={style}
          Icon={Icon}
          action={() => handleRedirect(label, url)}
        />
      ))}
    </div>
  );
};

export default AppLibrary;
