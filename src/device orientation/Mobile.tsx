import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
import { ButtonMain } from "../components/ButtonMain";
import Phone from "../components/mobile/Phone";

const Mobile = () => {
  const { start, setStart } = useStart();
  return (
    <div
      className={`lg:hidden flex items-center justify-center mobile:px-8 px-4 text-sm min-h-[600px] mobile:min-h-[660px] mobile:[@media(max-height:450px)]:min-h-auto`}
    >
      <motion.div
        initial={{
          opacity: 1,
          zIndex: 1,
          marginTop: "8rem",
          marginBottom: "8rem",
        }}
        animate={
          start
            ? { opacity: 0, zIndex: 0, marginTop: "0rem", marginBottom: "0" }
            : { opacity: 1, zIndex: 1, marginTop: "8rem", marginBottom: "8rem" }
        }
        transition={{ duration: 0.6, delay: 1 }}
        layout="position"
        className={`flex flex-col justify-center items-start mobile:items-center text-sm mobile:text-lg gap-y-2 w-full`}
      >
        <h1 className="font-geist text-3xl mobile:text-4xl font-bold">
          Classic Portfolio
        </h1>
        <div className="flex flex-col gap-y-3 font-geist leading-7 mobile:text-center mobile:w-[70%]">
          <p>
            A portfolio inspired by the old devices I used as a kid, featuring
            Windows 95 interface and a Samsung Ace layout.{" "}
            <span className="font-bold">
              Since you're viewing this on a mobile or tablet-sized screen,
              you're currently in the Samsung Ace layout.
            </span>
          </p>

          <p className="text-md">
            Before you click "Get Started", feel free to explore a more
            accessible version of this portfolio.
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <ButtonMain
            variant={"default"}
            onClick={() => {
              setStart(!start);
            }}
            disabled={start}
            className="mobile:min-w-42 w-full text-sm mobile:text-lg mobile:py-6"
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
            className="min-w-fit mobile:min-w-42 w-full text-sm mobile:text-lg mobile:py-6"
          >
            Visit Old Version
          </ButtonMain>
        </div>
      </motion.div>
      <Phone />
    </div>
  );
};

export default Mobile;
