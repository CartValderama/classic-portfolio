import { ButtonMain } from "../components/ButtonMain";
import Monitor from "../components/monitor/Monitor";
import { useStart } from "../context/StartContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { start, setStart } = useStart();

  return (
    <div
      className={`hidden lg:flex flex-row-reverse max-w-[85rem] items-center relative w-full h-screen xl:min-h-[800px] lg:[@media(max-height:750px)]:min-h-[720px] px-8`}
    >
      {/* text explanation */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={
          start ? { x: -1300, opacity: 0, scale: 2 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.6, delay: 1 }}
        layout="position"
        className={`absolute left-0 flex flex-col justify-center gap-y-5 xl:w-6/10 lg:w-6/11 ml-8`}
      >
        <h1 className="font-geist text-[2.5rem] font-bold leading-11">
          Classic Portfolio
        </h1>
        <div className="flex flex-col gap-y-2 font-geist text-base xl:text-lg leading-8 ">
          <p>
            A portfolio inspired by the old devices I used as a kid, featuring
            Windows 95 interface and a Samsung Ace layout.{" "}
            <span className="font-bold">
              Since you're viewing this on a desktop-sized screen, you're
              currently in Windows 95 layout.
            </span>
          </p>
          <p>
            For a more accessible experience, you can switch to the old version
            of the portfolio by clicking the button below.
          </p>
        </div>
        <div className="flex gap-2">
          <ButtonMain
            variant={"default"}
            size={"lg"}
            onClick={() => {
              setStart(!start);
            }}
            disabled={start}
          >
            Get Started
          </ButtonMain>
          <ButtonMain
            variant={"ghost"}
            size={"lg"}
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
      {/* small scaled monitor */}
      <Monitor />
    </div>
  );
};

export default Desktop;
