import { usePhoneUIStore } from "../../../store/phoneUIStore";

const Wallpaper = () => {
  const { isShowApps } = usePhoneUIStore();

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-200 mobile:[@media(max-height:450px)]:w-full  ${
        isShowApps ? "opacity-30" : "opacity-100"
      }`}
      style={{
        backgroundImage: "url('https://i.imgur.com/V5xb8J1.jpeg')",
      }}
    />
  );
};

export default Wallpaper;
