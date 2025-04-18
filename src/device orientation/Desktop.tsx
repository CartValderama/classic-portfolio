import Monitor from "../components/monitor/Monitor";
import { useStart } from "../context/StartContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { start, setStart } = useStart();

  return (
    <div
      className={`hidden lg:flex flex-row-reverse items-center relative w-full h-screen 4xl:max-w-[2200px] 3xl:max-w-[1800px] 2xl:max-w-[1400px] max-w-[1200px] 3xl:min-h-[900px] min-h-[735px] px-8`}
    >
      {/* text explanation */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={
          start ? { x: -2000, opacity: 0, scale: 2 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, delay: start ? 0 : 1 }}
        layout="position"
        className={`absolute left-0 flex flex-col justify-center gap-y-4 3xl:gap-y-6 xl:w-6/10 lg:w-6/11 ml-8`}
      >
        <h1 className="font-geist text-5xl font-bold 3xl:text-6xl 4xl:text-7xl">
          Classic Portfolio
        </h1>
        <div className="flex flex-col gap-y-2 font-geist 3xl:text-xl 4xl:text-2xl leading-8 2xl:leading-8 3xl:leading-9 4xl:leading-11">
          <p>
            A portfolio inspired by the old devices I used as a kid, featuring
            Windows 95 interface and a Samsung Galaxy Ace layout.
            <span className="font-bold">
              {" "}
              Since you're viewing this on a desktop-sized screen, you're
              currently in Windows 95 layout.
            </span>
          </p>
          <p>
            For a more accessible experience, you can switch to the old version
            of the portfolio by clicking the button below.
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            className="button-primary py-2 px-4 text-sm 3xl:text-xl 3xl:py-3 3xl:px-5 4xl:text-2xl 4xl:py-4 4xl:px-6"
            onClick={() => {
              setStart(!start);
            }}
            disabled={start}
          >
            Get Started
          </button>
          <button
            type="button"
            className="button-secondary py-2 px-4 text-sm 3xl:text-xl 3xl:py-3 3xl:px-5 4xl:text-2xl 4xl:py-4 4xl:px-6"
            onClick={() => {
              window.open(
                "https://cart-valderama-portfolio.vercel.app/",
                "_blank"
              );
            }}
            disabled={start}
          >
            Visit Accessible Version
          </button>
        </div>
      </motion.div>
      {/* small scaled monitor */}
      <Monitor />
    </div>
  );
};

export default Desktop;
