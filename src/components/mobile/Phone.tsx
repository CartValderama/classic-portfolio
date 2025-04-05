import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import { GrMultiple } from "react-icons/gr";
import { AiOutlineRollback } from "react-icons/ai";
import MainMobileScreen from "./MainMobileScreen";

const Phone = () => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={start ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.6, delay: 2 }}
      layout="position"
      className={`flex w-full h-full flex-col items-center justify-center absolute mobile:max-w-[30rem]  ${
        start ? "z-10" : "-z-10"
      }`}
    >
      <div
        className={`w-full mobile:max-w-[30rem] min-h-[50rem] mobile:max-h-[50rem] flex-1 relative mobile:border-2 bg-[#2b2b2e] border-[#262627] mobile:rounded-[7rem]`}
      >
        <div className="hidden mobile:block bg-[#868484] w-0.5 h-18 absolute -right-1 rounded-r-lg top-40"></div>
        <div className="hidden mobile:block bg-[#868484] w-0.5 h-30 absolute -left-1 rounded-l-lg top-60"></div>
        <div className="mobile:border-10 border-[#242429] mobile:rounded-[7rem] w-full h-full">
          <div className="mobile:border-2 border-[#515455] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center">
            <div className="mobile:border-2 border-[#171718] mobile:rounded-[6rem] w-full flex-1 flex flex-col items-center justify-center bg-[#131314] py-12 px-2 mobile:px-8 gap-y-5">
              <div className="flex flex-col items-center w-full ">
                <div className=" flex items-center justify-between gap-y-2 w-full">
                  <div className="w-5 h-5 ml-5"></div>
                  <div className="w-38 h-2 bg-[#242425] rounded-3xl border-2 border-[#515455]"></div>
                  <div className="bg-[#1e1e1e] border-2 border-[#464646] w-5 h-5 rounded-full mr-5 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-[#464646] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#1e1e1e] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="uppercase font-bold text-lg">SpamSung</p>
              </div>

              {/* main screen */}
              <div className="h-full flex-1 rounded-xs [&::-webkit-scrollbar]:hidden">
                <MainMobileScreen />
              </div>

              <div className=" flex justify-around w-full items-center ">
                <button className="flex items-center">
                  <GrMultiple className="text-2xl text-[#878d8f]" />
                </button>
                <button className="w-20 h-10 border-3 border-[#515455] rounded-xl"></button>
                <button className="flex items-center">
                  <AiOutlineRollback className="text-3xl text-[#878d8f]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phone;
