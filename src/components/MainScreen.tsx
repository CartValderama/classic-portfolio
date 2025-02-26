import { motion } from "framer-motion";
import { useEffect } from "react";
import { RiShutDownLine } from "react-icons/ri";

type MonitorScreenProps = {
  select: boolean;
};

const MonitorScreen = ({ select }: MonitorScreenProps) => {
  useEffect(() => {
    if (select) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [select]);
  return (
    <motion.div
      initial={false}
      animate={
        select
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 1, scale: 0.45, x: 365 }
      }
      transition={{ duration: 1, ease: "linear" }}
      className={`z-10 ${
        select
          ? "min-w-screen min-h-screen flex flex-col items-center justify-center absolute"
          : "hidden"
      }`}
    >
      <div className="bg-[#dbd49d] sm:w-[60rem] 2xl:w-[78rem] sm:h-[45rem] 2xl:h-[58rem] relative rounded-4xl flex justify-center items-start sm:py-10 2xl:py-14">
        {/* monitor screen*/}
        <div className="sm:w-[53rem] 2xl:w-[67rem] sm:h-[35rem] 2xl:h-[46rem] rounded-2xl relative flex justify-center items-center">
          <div className="absolute bg-[#a0926f] w-full h-full opacity-40 rounded-3xl"></div>
          <div className="absolute top-2 sm:left-[.65rem] 2xl:left-[.7rem] sm:w-[97.5%] 2xl:w-[98%]  sm:border-[2.5rem] 2xl:border-[3rem] border-transparent border-t-[#847959] rounded"></div>
          <div className="absolute top-3 left-2 h-[96.7%] sm:border-[2.5rem] 2xl:border-[3rem] border-b-[1.5rem] border-transparent border-l-[#a0926f] rounded"></div>
          <div className="absolute top-3 right-2 h-[96.7%] sm:border-[2.5rem] 2xl:border-[3rem] border-b-[1.5rem] border-transparent border-r-[#a0926f] rounded"></div>
          <div
            className="bg-[#0b0b0b] sm:w-[46.5rem] 2xl:w-[59rem] sm:h-[29.5rem] 2xl:h-[39rem] flex items-center 
              justify-center shadow-inner rounded-xl scale-102"
          >
            {/* main screen */}
            <div></div>
            {/* monitor buttons*/}
            <div className="absolute sm:-bottom-30 2xl:-bottom-34 flex flex-row-reverse items-baseline justify-between w-full">
              <div className="flex flex-row-reverse gap-x-12">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#aba072] text-[#8d845f]">
                  <RiShutDownLine />
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="w-16 h-[1rem] bg-[#aba072]"></span>
                  <span className="w-16 h-[1rem] bg-[#aba072] "></span>
                  <span className="w-16 h-[1rem] bg-[#aba072] "></span>
                  <span className="w-16 h-[1rem] bg-[#aba072] "></span>
                </div>
              </div>

              <p className="text-xl text-[#a0926f] font-semibold font-times">
                ViewSonic
              </p>
            </div>
          </div>
        </div>

        {/* monitor stand */}
        <div className="absolute sm:-bottom-[6rem] 2xl:-bottom-[7rem] w-full flex flex-col items-center justify-center sm:scale-[202%] 2xl:scale-[260%] -z-40">
          <div className="w-96 border-[.5rem] border-transparent border-t-[#6b6246]"></div>
          <div className="absolute -top-0 w-60 flex flex-col items-center justify-center -z-10">
            <div className="w-19 h-3 rounded-[50%] bg-[#544d31] scale-200 -z-10"></div>
            <div className="w-[4.72rem] h-4 rounded-b-[90%] bg-[#b3ac7e] scale-200 -z-20"></div>
          </div>
          <div className="mt-2 w-80 flex flex-col items-center justify-center -z-20">
            <div className="w-44 h-5 rounded-[50%] bg-[#887e50] scale-200"></div>
            <div className="w-[10.99rem] h-5 rounded-b-[90%] bg-[#b3ac7e] scale-200 -z-20"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MonitorScreen;
