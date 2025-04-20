import { useStart } from "../context/StartContext";
import { useThemeMonitor } from "../lib/hooks/useThemeMonitorChanges";

type LandingIntroProps = {
  isMobileLayout: boolean;
};

const LandingIntro = ({ isMobileLayout }: LandingIntroProps) => {
  const { start, setStart } = useStart();
  const isThemeChanging = useThemeMonitor();

  const colorTransition = isThemeChanging
    ? "transition-colors duration-500"
    : "transition-none";

  return (
    <>
      <h1
        className={`font-bold ${colorTransition} ${
          isMobileLayout
            ? "text-4xl mobile:text-5xl"
            : "font-geist text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl"
        }`}
      >
        Classic Portfolio
      </h1>

      <div
        className={`flex flex-col gap-y-2 leading-7 ${colorTransition} ${
          isMobileLayout
            ? "font-geist mobile:text-center mobile:w-[80%] text-sm mobile:text-xl mobile:leading-9"
            : "font-geist xl:leadin-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 2xl:text-xl 3xl:text-2xl 4xl:text-3xl"
        }`}
      >
        <p>
          A portfolio inspired by the old devices I used as a kid, featuring
          Windows 95 interface and a Samsung Galaxy Ace layout.
          <span className="font-bold text-shadow-sm">
            {isMobileLayout
              ? " Since you're viewing this on a mobile or tablet-sized screen, you're currently in the Samsung Galaxy Ace layout."
              : " Since you're viewing this on a desktop-sized screen, you're currently in Windows 95 layout."}
          </span>
        </p>

        <p>
          For a more accessible experience, you can switch to the old version of
          my portfolio by clicking the button below.
        </p>
      </div>

      <div
        className={`flex lg:justify-start mobile:justify-center gap-x-1 mt-2 w-full `}
      >
        <button
          type="button"
          className={`button-primary ${colorTransition} ${
            isMobileLayout
              ? "mobile:text-base text-sm mobile:min-w-42 py-3 px-4"
              : "text-sm py-2 px-3 xl:py-3 xl:px-4 xl:text-base 3xl:text-xl 3xl:py-4 3xl:px-6 4xl:text-2xl 4xl:py-5 4xl:px-7"
          }`}
          onClick={() => setStart(!start)}
          disabled={start}
        >
          Get Started
        </button>

        <button
          type="button"
          className={`button-secondary ${colorTransition}
          ${
            isMobileLayout
              ? "mobile:text-base text-sm  mobile:min-w-42 py-3 px-4"
              : "text-sm py-2 px-3 xl:py-3 xl:px-4 xl:text-base 3xl:text-xl 3xl:py-4 3xl:px-6 4xl:text-2xl 4xl:py-5 4xl:px-7"
          }`}
          onClick={() =>
            window.open(
              "https://cart-valderama-portfolio.vercel.app/",
              "_blank"
            )
          }
          disabled={start}
        >
          Visit Old Version
        </button>
      </div>
    </>
  );
};

export default LandingIntro;
