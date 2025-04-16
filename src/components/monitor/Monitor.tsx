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
      className={`flex flex-col items-center justify-center relative mb-[6.5rem]`}
    >
      {/* monitor head*/}
      <motion.div
        initial={{ width: "22rem", height: "16rem" }}
        animate={
          start
            ? { width: "100%", height: "82rem" }
            : { width: "22rem", height: "16rem" }
        }
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-[#dbd49d] max-w-[1700px] max-h-[860px]
        3xl:max-h-full 2xl:max-h-[1160px] xl:max-h-[960px] 
        [@media(max-height:1060px)]:max-w-[1360px] 
        [@media(max-height:900px)]:max-w-[1060px] 
        relative rounded-sm flex flex-col items-center justify-center z-10"
      >
        {/* main screen */}
        <motion.div
          initial={{ width: "86%", height: "82%" }}
          animate={
            start
              ? { width: "89%", height: "86%", marginBottom: ".3rem" }
              : { width: "86%", height: "82%" }
          }
          transition={{ duration: 0.6, delay: 1 }}
          className=" rounded-xl relative flex justify-center items-center"
        >
          <div className="absolute bg-[#a0926f] w-full h-full opacity-35 rounded-lg"></div>
          <motion.div
            initial={{ borderWidth: "0.3rem" }}
            animate={
              start ? { borderWidth: "0.8rem" } : { borderWidth: "0.3rem" }
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
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ width: "22rem", height: "8rem" }}
          animate={
            start
              ? { width: "100%", height: "38rem" }
              : { width: "22rem", height: "8rem" }
          }
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute flex flex-col items-center justify-center rounded-xs max-w-[1800px]
          [@media(max-height:1060px)]:max-w-[1300px] 
          [@media(max-height:900px)]:max-w-[1020px] 
          2xl:max-h-full xl:max-h-[500px] max-h-[400px]"
        >
          <div className="w-[88%] h-[20%] bg-[#d3cc96] rounded-b-xs z-10 border border-[#d3cc96]"></div>
          <div className="w-[40%] h-[20%] bg-[#cac28d] relative flex justify-center z-10">
            <div className="w-[130%] h-[110%] bg-[#bbb380] absolute -bottom-[35%] rounded-[60%] scale-110"></div>
            <div className="w-[110%] h-[80%] bg-[#cac28d] absolute bottom-[2%] rounded-[50%] scale-110"></div>
          </div>

          <div className="w-[100%] h-[90%] bg-[#dbd49d] flex flex-col justify-center px-[3%] p-[1.5%] mt-[3%] relative rounded-xs">
            <div
              className="absolute w-[100%] h-[48.5%] -top-[48%] right-0"
              style={{
                background: "#aaa57d",
                clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div className="flex justify-between items-center h-full w-full">
              <motion.div
                initial={{ borderWidth: ".15rem" }}
                animate={
                  start ? { borderWidth: ".4rem" } : { borderWidth: ".15rem" }
                }
                transition={{ duration: 0.6, delay: 1 }}
                className="w-[50%] h-[50%] border-3 border-[#ece8c8] border-t-[#8d8969] border-l-[#817e62]"
              ></motion.div>
              <div className="w-[30%] h-[12%] bg-[#3d3a22] relative flex justify-center rounded"></div>
            </div>
            <div className="flex justify-between items-center h-full w-full ">
              <div className="w-[50%] h-[70%] grid grid-cols-18 grid-rows-3 gap-x-1 ">
                {Array.from({ length: 54 }).map((_, index) => (
                  <motion.div
                    initial={{ fontSize: ".35rem" }}
                    animate={
                      start ? { fontSize: "1.2rem" } : { fontSize: ".35rem" }
                    }
                    transition={{ duration: 0.6, delay: 1 }}
                    key={index}
                    className="text-[#948d4e] font-black p-1 pt-0"
                  >
                    o
                  </motion.div>
                ))}
              </div>
              <div className="w-[40%] h-[40%] flex justify-end items-center gap-x-1">
                <div className="w-[30%] h-full flex gap-x-[15%] items-center">
                  <div className="bg-red-800 w-[10%] h-[20%] rounded"></div>
                  <div className="bg-orange-600 w-[10%] h-[20%] rounded"></div>
                  <div className="bg-green-800 w-[10%] h-[20%] rounded"></div>
                </div>
                <motion.div
                  initial={{
                    width: "1.5rem",
                    height: "1.5rem",
                    borderWidth: ".15rem",
                  }}
                  animate={
                    start
                      ? { width: "4rem", height: "4rem", borderWidth: ".35rem" }
                      : {
                          width: "1.5rem",
                          height: "1.5rem",
                          borderWidth: ".15rem",
                        }
                  }
                  transition={{ duration: 0.6, delay: 1 }}
                  className="rounded-full border-2 border-[#ece8c8] border-t-[#99966f] border-r-[#ebe6d1] border-b-[#e6e1cb] border-l-[#999674]"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Monitor;
