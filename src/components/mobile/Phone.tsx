import { motion } from "framer-motion";
import { useStart } from "../../context/StartContext";
import PhoneHeader from "./phone_parts/PhoneHeader";
import MainPhoneScreen from "./MainPhoneScreen";
import PhoneButtons from "./phone_parts/PhoneButtons";

const Phone = () => {
  const { start } = useStart();

  const initial = { opacity: 0, zIndex: 0, scale: 0 };
  const animate = { opacity: 1, zIndex: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      animate={start ? animate : initial}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      layout="position"
      className="flex w-full h-full items-center justify-center absolute"
    >
      <div
        className="w-full h-full min-h-[600px] max-h-[950px] relative bg-[#2b2b2e] border-[#262627]
                  mobile:w-[600px] mobile:min-h-[800px] mobile:border-2 mobile:rounded-[7rem]
                  mobile:[@media(max-height:450px)]:w-full mobile:[@media(max-height:450px)]:min-h-auto mobile:[@media(max-height:450px)]:h-full 
                  [@media(max-height:450px)]:border-0 [@media(max-height:450px)]:rounded-none"
      >
        <div
          className="bg-[#868484] hidden w-0.5 h-18 absolute -right-1 rounded-r-lg top-40
                    mobile:rounded-r-2xl mobile:block
                    [@media(max-height:450px)]:hidden"
        />
        <div
          className="bg-[#868484] hidden w-0.5 h-30 absolute -left-1 rounded-l-lg top-60
                    mobile:rounded-r-2xl mobile:block
                    [@media(max-height:450px)]:hidden"
        />
        <div
          className="w-full h-full border-[#242429] 
                    mobile:border-10 mobile:rounded-[7rem]  
                    [@media(max-height:450px)]:border-0"
        >
          <div
            className="border-[#515455] w-full h-full flex flex-col items-center justify-center
                      mobile:border-2 mobile:rounded-[6rem]
                      [@media(max-height:450px)]:border-0"
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center bg-[#131314] p-4
                        mobile:border-2 border-[#171718] mobile:rounded-[6rem] mobile:py-12 mobile:px-12
                        mobile:[@media(max-height:450px)]:py-4 mobile:[@media(max-height:450px)]:flex-row-reverse
                        [@media(max-height:450px)]:border-0 [@media(max-height:450px)]:rounded-none mobile:[@media(max-height:450px)]:px-4"
            >
              <PhoneHeader />
              <MainPhoneScreen />
              <PhoneButtons />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phone;
