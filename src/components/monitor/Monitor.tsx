import MainScreen from "./MainScreen";
import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";

const Monitor = () => {
  const { start } = useStart();
  return (
    <motion.div
      initial={{ width: "22rem", height: "16rem" }}
      animate={
        start
          ? {
              width: "100%",
              height: "100%",
              marginTop: "6.5rem",
              paddingRight: "0",
            }
          : { width: "22rem", height: "16rem" }
      }
      transition={{ duration: 0.6, delay: 1 }}
      className={`flex flex-col justify-center items-center relative mb-[6.5rem]`}
    >
      {/* monitor head*/}
      <motion.div
        initial={{ width: "22rem", height: "16rem" }}
        animate={
          start
            ? { width: "100%", height: "65rem" }
            : { width: "22rem", height: "16rem" }
        }
        transition={{ duration: 0.6, delay: 1 }}
        className={`bg-[#dbd49d] xl:max-w-[1200px] lg:[@media(max-height:750px)]:max-w-[1000px] relative rounded-sm flex flex-col items-center justify-center z-10`}
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
        initial={{ width: "22rem", opacity: 1 }}
        animate={
          start ? { width: "100%", opacity: 0 } : { width: "22rem", opacity: 1 }
        }
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute xl:max-w-[1200px] lg:[@media(max-height:750px)]:max-w-[1000px] -bottom-[40%] h-[40%] flex flex-col items-center justify-center rounded-xs"
      >
        <div className="w-[88%] h-[16%] bg-[#d3cc96] rounded-b-xs z-10"></div>
        <div className="w-[40%] h-[15%] bg-[#cac28d] relative flex justify-center z-10">
          <div className="w-[130%] h-[110%] bg-[#bbb380] absolute -bottom-[35%] rounded-[60%] scale-110"></div>
          <div className="w-[100%] h-[80%] bg-[#cac28d] absolute -bottom-[2%] rounded-[50%] scale-110"></div>
        </div>

        <div className="w-[100%] h-[90%] bg-[#dbd49d] flex flex-col justify-center px-[3%] p-[1.5%] mt-[3%] relative rounded-xs">
          <div
            className="absolute w-[100%] h-[50%] -top-[49.5%] right-0"
            style={{
              background: "#aaa57d",
              clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
          <div className="flex justify-between items-center h-full w-full">
            <div className="w-[50%] h-[50%] border-3 border-[#ece8c8] border-t-[#8d8969] border-l-[#817e62]"></div>
            <div className="w-[30%] h-[12%] bg-[#3d3a22] relative flex justify-center ">
              <div className="w-[12%] h-[130%] -top-[130%] scale-x-200 bg-[#beb87a] absolute rounded-t-full"></div>
              <div className="w-[12%] h-[130%] -bottom-[140%] scale-x-200 bg-[#cec68c] absolute rounded-b-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center h-full w-full ">
            <div className="w-[50%] h-[70%] grid grid-cols-18 grid-rows-3 gap-x-1 ">
              {Array.from({ length: 54 }).map((_, index) => (
                <div
                  key={index}
                  className="text-[40%] text-[#948d4e] font-black"
                >
                  o
                </div>
              ))}
            </div>
            <div className="w-[40%] h-[40%] flex justify-end items-center gap-x-1">
              <div className="w-[20%] h-full flex gap-x-[15%] items-center">
                <div className="bg-red-800 w-[10%] h-[10%] rounded"></div>
                <div className="bg-orange-600 w-[10%] h-[10%] rounded"></div>
                <div className="bg-green-800 w-[10%] h-[10%] rounded"></div>
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
