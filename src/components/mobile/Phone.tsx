import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import AboutMe from "../about/AboutMe";

const Phone = () => {
  const { start } = useStart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={start ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.6, delay: 2 }}
      layout="position"
      className={`flex w-full h-full flex-col items-center justify-center absolute max-w-[30rem]  ${
        start ? "z-10" : "-z-10"
      }`}
    >
      <div
        className={`max-w-[30rem] min-h-[50rem] mobile:max-h-[50rem] flex-1 relative mobile:border-2 bg-[#2b2b2e] border-[#262627] mobile:rounded-[7rem]`}
      >
        <div className="mobile:border-10 border-[#242429] mobile:rounded-[7rem] w-full h-full">
          <div className="mobile:border-2 border-[#515455] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center">
            <div className="mobile:border-2 border-[#171718] mobile:rounded-[6rem] w-full h-full flex flex-col items-center justify-center bg-[#131314] py-12 px-2 mobile:px-8">
              <div className="h-[15%] mobile:h-[10%]"></div>

              {/* main screen */}
              <div className="w-full h-full bg-[#15616e] text-black overflow-auto [&::-webkit-scrollbar]:hidden">
                <AboutMe />
              </div>
              <div className="h-[20%] mobile:h-[15%] flex justify-around w-full items-center mobile:items-end">
                <div className="w-10 h-10 bg-[#ff605c] rounded-full"></div>
                <div className="w-10 h-10 bg-[#ffbd44] rounded-full"></div>
                <div className="w-10 h-10 bg-[#00ca4e] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phone;
