import MainScreen from "./monitor/MainScreen";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";
const Monitor = () => {
  const { start } = useStart();
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={start ? { scale: 1.2, y: 150 } : { scale: 0.5, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      layout="position"
      className={`flex flex-col items-center w-full absolute -right-[30%] ${
        start ? "right-0 mt-0" : "mr-12 xl:mr-0 mt-10"
      }`}
    >
      {/* monitor head*/}
      <div
        className={`bg-[#dbd49d] w-[56rem] h-[46rem] 2xl:w-[66rem] 2xl:h-[56rem] relative rounded-2xl flex flex-col items-center justify-between py-10 shadow-lg shadow-[#847959] dark:shadow-[#0b0b0b]`}
      >
        {/* main screen */}
        <div className="w-[88%] h-[88%] rounded-xl relative flex justify-center items-start">
          <div className="absolute bg-[#a0926f] w-full h-full opacity-35 rounded-md"></div>
          <div className="absolute mt-2 w-[98.5%] h-[98%] rounded border-[1rem] border-t-[#847959] border-x-[#a0926f] border-b-[1.2rem] 2xl:border-b-[1.5rem]  border-b-transparent"></div>

          <div className="absolute mt-6 bg-[#0b0b0b] w-[94.3%] 2xl:w-[95.2%] h-[92%] 2xl:h-[92.5%]">
            <MainScreen />
          </div>
        </div>
        {/* monitor buttons*/}
        <div className="flex flex-row-reverse items-center justify-between w-[80%]">
          <div className="flex w-48 h-12 gap-x-2 items-center">
            <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
            <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
            <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
            <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
          </div>

          <div className="flex items-center gap-x-1 text-[#a0926f] select-none">
            <BiGlobe className="text-[2.3rem]" />
            <p className="font-semibold font-times text-xl">McQueen</p>
          </div>
        </div>
      </div>
      {/* monitor stand */}
      <div
        className={`relative w-[56rem] 2xl:w-[76rem] flex flex-col-reverse items-center justify-center`}
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
