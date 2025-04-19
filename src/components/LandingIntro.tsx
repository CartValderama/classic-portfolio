import { useStart } from "../context/StartContext";

type LandingIntroProps = {
  isMobileLayout: boolean;
};

const LandingIntro = ({ isMobileLayout }: LandingIntroProps) => {
  const { start, setStart } = useStart();

  return (
    <>
      <h1
        className={`font-bold ${
          isMobileLayout
            ? "text-3xl mobile:text-4xl"
            : "font-geist text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl"
        }`}
      >
        Classic Portfolio
      </h1>

      <div
        className={`flex flex-col gap-y-2 leading-7 ${
          isMobileLayout
            ? "font-geist mobile:text-center mobile:w-[80%] text-md mobile:text-lg"
            : "font-geist leading-8 xl:leadin-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 2xl:text-xl 3xl:text-2xl 4xl:text-3xl"
        }`}
      >
        <p>
          A portfolio inspired by the old devices I used as a kid, featuring
          Windows 95 interface and a Samsung Galaxy Ace layout.
          <span className="font-bold">
            {isMobileLayout
              ? " Since you're viewing this on a mobile or tablet-sized screen, you're currently in the Samsung Galaxy Ace layout."
              : " Since you're viewing this on a desktop-sized screen, you're currently in Windows 95 layout."}
          </span>
        </p>

        <p>
          For a more accessible experience, you can switch to the old version of
          the portfolio by clicking the button below.
        </p>
      </div>

      <div className="flex lg:justify-start mobile:justify-center gap-x-3 mt-2 w-full">
        <button
          type="button"
          className={`button-primary ${
            isMobileLayout
              ? "text-sm mobile:text-md min-w-42"
              : "text-sm py-2 px-3 xl:py-3 xl:px-4 xl:text-base 3xl:text-xl 3xl:py-4 3xl:px-6 4xl:text-2xl 4xl:py-5 4xl:px-7"
          }`}
          onClick={() => setStart(!start)}
          disabled={start}
        >
          Get Started
        </button>

        <button
          type="button"
          className={`button-secondary  ${
            isMobileLayout
              ? "text-sm mobile:text-md min-w-42"
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
