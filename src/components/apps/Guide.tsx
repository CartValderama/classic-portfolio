import MobileGuide from "./guide/MobileGuide";
import DesktopGuide from "./guide/DesktopGuide";

const Guide = () => {
  return (
    <div className="relative h-full">
      <MobileGuide />
      <DesktopGuide />
    </div>
  );
};

export default Guide;
