import MainScreen from "./MainScreen";
import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";

const Monitor = () => {
  const { start } = useStart();
  return (
    <motion.div
      initial={{ width: "24rem", height: "18rem", scale: 0.85 }}
      animate={
        start
          ? { width: "100%", height: "100%", marginTop: "6.5rem", scale: 1 }
          : { width: "24rem", height: "18rem", scale: 0.85 }
      }
      transition={{ duration: 0.6, delay: 1 }}
      className={`flex flex-col justify-center items-center relative mb-[6.5rem]`}
    >
      {/* monitor head*/}
      <motion.div
        initial={{ width: "24rem", height: "18rem" }}
        animate={
          start
            ? { width: "100%", height: "65rem" }
            : { width: "24rem", height: "18rem" }
        }
        transition={{ duration: 0.6, delay: 1 }}
        className={`bg-[#dbd49d] xl:max-w-[1200px] lg:[@media(max-height:750px)]:max-w-[1000px] relative rounded-lg flex flex-col items-center justify-center shadow shadow-[#847959] dark:shadow-[#0b0b0b] `}
      >
        {/* main screen */}
        <motion.div
          initial={{ width: "86%", height: "82%" }}
          animate={
            start
              ? { width: "90%", height: "88%" }
              : { width: "86%", height: "82%" }
          }
          transition={{ duration: 0.6, delay: 1 }}
          className=" rounded-xl relative flex justify-center items-center"
        >
          <div className="absolute bg-[#a0926f] w-full h-full opacity-35 rounded-lg"></div>
          <motion.div
            initial={{ borderWidth: "0.3vw" }}
            animate={
              start ? { borderWidth: "0.8vw" } : { borderWidth: "0.3vw" }
            }
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute w-[99.5%] h-[99.5%] rounded border-t-[#847959] border-x-[#a0926f] border-b-transparent"
          >
            <div className="absolute w-[100%] h-[100%] border-2 border-[#534f33]">
              <MainScreen />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* monitor stand */}
      <motion.div
        initial={{ width: "24rem" }}
        animate={start ? { width: "100%" } : { width: "24rem" }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute xl:max-w-[1200px] lg:[@media(max-height:750px)]:max-w-[1000px] -bottom-[40%] h-[40%] flex flex-col items-center justify-center "
      >
        <div className="w-[85%] h-[15%] bg-[#c0ba89] rounded-b"></div>
        <div className="w-[40%] h-[8%] bg-[#aaa57d]"></div>
        <div className="w-[105%] h-[77%] bg-[#dbd49d] flex flex-col rounded-sm py-2 px-4 shadow shadow-[#847959] dark:shadow-[#0b0b0b]">
          <div className="flex justify-between items-center h-full w-full">
            <div className="w-[50%] h-[50%] border-3 border-[#ece8c8] border-t-[#8d8969] border-l-[#817e62]"></div>
            <div className="w-[30%] h-[12%] bg-[#3d3a22] relative flex justify-center ">
              <div className="w-[12%] h-[130%] -top-1.5 scale-x-200 bg-[#beb87a] absolute rounded-t-full"></div>
              <div className="w-[12%] h-[130%] -bottom-1.5 scale-x-200 bg-[#cec68c] absolute rounded-b-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center h-full w-full ">
            <div className="w-[50%] h-[80%] grid grid-cols-18 grid-rows-3 gap-x-1 ">
              {Array.from({ length: 54 }).map((_, index) => (
                <div
                  key={index}
                  className="text-[.4rem] text-[#64603d] font-black"
                >
                  o
                </div>
              ))}
            </div>
            <div className="w-[40%] h-[40%] flex justify-end items-center gap-x-1.5">
              <div className="w-[20%] flex gap-x-1">
                <div className="bg-red-800 w-1.5 h-1.5 rounded"></div>
                <div className="bg-orange-600 w-1.5 h-1.5 rounded"></div>
                <div className="bg-green-800 w-1.5 h-1.5 rounded"></div>
              </div>
              <div className="rounded-full w-[15%] h-[150%] border-2 border-[#ece8c8] border-t-[#99966f] border-r-[#ebe6d1] border-b-[#e6e1cb] border-l-[#999674]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Monitor;
