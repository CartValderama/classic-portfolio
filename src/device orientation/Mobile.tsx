import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { ButtonMain } from "../components/ButtonMain";
import Phone from "../components/mobile/Phone";

const Mobile = () => {
  const { start, setStart } = useStart();
  return (
    <div className="lg:hidden py-74 flex h-screen items-center px-4 text-base md:text-xl">
      <motion.div
        initial={{ opacity: 1 }}
        animate={start ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        layout="position"
        className={`flex flex-col md:items-center justify-center gap-y-5 md:gap-y-8 w-full`}
      >
        <h1 className="font-geist text-4xl md:text-7xl font-bold leading-12 md:mb-4">
          Classic Portfolio
        </h1>
        <div className="flex flex-col gap-y-3 font-geist leading-7 md:text-center md:w-[70%]">
          <p>
            A portfolio inspired by the old devices I used as a kid, featuring
            Windows 95 interface and a Samsung Ace layout.{" "}
            <span className="font-semibold">
              Since you're viewing this on a mobile-sized screen, you're
              currently in Samsung Ace layout.
            </span>{" "}
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
