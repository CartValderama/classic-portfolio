import MainScreen from "./MainScreen";
import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";

const Monitor = () => {
  const { start } = useStart();
  return (
    <motion.div
      initial={{ scale: 0.4 }}
      animate={start ? { scale: 1 } : { scale: 0.4 }}
      transition={{ duration: 0.6, delay: 1 }}
      layout="position"
      className={`flex flex-col items-center w-full absolute -right-[31%] ${
        start ? "right-0 mt-40 2xl:mt-20" : " xl:mr-0 mt-10"
      }`}
    >
      {/* monitor head*/}
      <div
        className={`bg-[#dbd49d] w-[63rem] h-[53rem] relative rounded-3xl flex flex-col items-center justify-between py-10 shadow-lg shadow-[#847959] dark:shadow-[#0b0b0b]`}
      >
        {/* main screen */}
        <div className="w-[90%] h-[90%] rounded-2xl relative flex justify-center items-center">
          <div className="absolute bg-[#a0926f] w-full h-full opacity-35 rounded-xl"></div>
          <div className="absolute mt-[1px] w-[99.5%] h-[99.5%] rounded-lg border-[1rem] border-t-[#847959] border-x-[#a0926f] border-b-[1.2rem] border-b-transparent">
            <div className="absolute -top-1 -left-[2px] w-[100.5%] h-[101%] border-2 rounded border-[#534f33]">
              <MainScreen />
            </div>
          </div>
        </div>
        {/* monitor buttons*/}
        <div className="flex flex-row-reverse items-center justify-between w-[80%]">
          <div className="flex w-72 h-12 gap-x-2 items-center">
            <span className="relative w-[70%] h-[40%] bg-[#aba072]">
              <span className="absolute -bottom-[2px] left-1 w-[90%] h-0.5 bg-[#68644c]"></span>
            </span>
            <span className="relative w-[70%] h-[40%] bg-[#aba072]">
              <span className="absolute -bottom-[2px] left-1 w-[90%] h-0.5 bg-[#68644c]"></span>
            </span>
            <span className="relative w-[70%] h-[40%] bg-[#aba072]">
              <span className="absolute -bottom-[2px] left-1 w-[90%] h-0.5 bg-[#68644c]"></span>
            </span>
          </div>

          <div className="flex items-center gap-x-1 text-[#a0926f] select-none">
            <p className="font-semibold font-dvd text-2xl">McQueen</p>
          </div>
        </div>
      </div>
      {/* monitor stand */}
      <div
        className={`relative w-[65rem] flex flex-col-reverse items-center justify-center`}
      >
        <div className="mt-6 flex flex-col-reverse items-center w-full ">
          <div className="w-[30%] h-8 rounded-b-[90%] bg-[#b3ac7e] scale-200 "></div>
          <div className="w-[30%] h-8 rounded-[50%] bg-[#887e50] scale-200"></div>
        </div>
        <div className="-mt-10 absolute flex flex-col-reverse items-center w-full">
          <div className="w-[20%] h-6 rounded-b-[90%] bg-[#b3ac7e] scale-200 "></div>
          <div className="w-[20%] h-6 rounded-[50%] bg-[#887e50] scale-200"></div>
        </div>
        <div className="w-[70%] h-7 bg-[#b3ac7e] rounded-b-xl z-10 "></div>
      </div>
    </motion.div>
  );
};

export default Monitor;
