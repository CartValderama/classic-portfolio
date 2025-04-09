import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { ButtonMain } from "../components/ButtonMain";
import Phone from "../components/mobile/Phone";

const Mobile = () => {
  const { start, setStart } = useStart();
  return (
    <div
      className={`lg:hidden flex items-center justify-center px-4 text-sm ${
        start ? "min-h-[600px] landscape:min-h-[1000px]" : "min-h-[550px]"
      }`}
    >
      <motion.div
        initial={{ opacity: 1, zIndex: 1 }}
        animate={start ? { opacity: 0, zIndex: 0 } : { opacity: 1, zIndex: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        layout="position"
        className={`flex flex-col mobile:items-center mobile:text-sm sm:text-lg justify-center gap-y-2 w-full `}
      >
        <h1 className="font-geist text-3xl mobile:text-4xl font-bold">
          Classic Portfolio
        </h1>
        <div className="flex flex-col gap-y-3 font-geist leading-7 mobile:text-center mobile:w-[70%]">
          <p>
            A portfolio inspired by the old devices I used as a kid, featuring
            Windows 95 interface and a Samsung Ace layout.{" "}
            <span className="font-semibold">
              Since you're viewing this on a mobile or tablet-sized screen,
              you're currently in the Samsung Ace layout.
            </span>
          </p>
          <p>
            For a more accessible experience, you can switch to the old version
            of the portfolio by clicking the button below.
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <ButtonMain
            variant={"default"}
            onClick={() => {
              setStart(!start);
            }}
            disabled={start}
          >
            Get Started
          </ButtonMain>
          <ButtonMain
            variant={"ghost"}
            onClick={() => {
              window.open(
                "https://cart-valderama-portfolio.vercel.app/",
                "_blank"
              );
            }}
            disabled={start}
          >
            Visit Accessible Version
          </ButtonMain>
        </div>
      </motion.div>
      <Phone />
    </div>
  );
};

export default Mobile;
