import { BiGlobe } from "react-icons/bi";
import { RiShutDownLine } from "react-icons/ri";
import MainScreen from "../MonitorContent/MainScreen";
const Computer = () => {
  return (
    <div className="flex flex-col items-center scale-40">
      {/* monitor head*/}
      <div className="bg-[#dbd49d] w-[33rem] h-[25rem] relative rounded-xl flex justify-center items-start py-5">
        <div className="w-[30rem] h-[20rem] rounded-lg relative flex justify-center items-start">
          <div className="absolute bg-[#a0926f] w-full h-full opacity-40 rounded-md"></div>
          <div className="absolute mt-1 w-[98.5%] h-[98%] rounded border-8 border-t-[#847959] border-x-[#a0926f] border-b-[.6rem] border-b-transparent"></div>
          {/* main screen */}
          <div className="absolute mt-3 bg-[#0b0b0b] w-[95.2%] h-[92.5%]">
            <MainScreen />
          </div>
          {/* monitor buttons*/}
          <div className="absolute -bottom-11 flex flex-row-reverse items-center justify-between w-[95.2%]">
            <div className="flex items-center flex-row-reverse gap-x-7 w-1/2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#aba072] text-[#8d845f] text-xs">
                <RiShutDownLine />
              </div>
              <div className="flex w-24 h-6 gap-x-1 items-center">
                <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
                <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
                <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
                <span className="w-[35%] h-[30%] bg-[#aba072] rounded-xs"></span>
              </div>
            </div>

            <div className="flex items-center gap-x-1 text-[#a0926f]">
              <BiGlobe className="text-[1rem]" />
              <p className="font-semibold text-[.7rem] font-times">McQueen</p>
            </div>
          </div>
        </div>
      </div>
      {/* monitor stand */}
      <div className="relative w-full flex flex-col items-center justify-center ">
        <div className="mt-5 w-80 flex flex-col-reverse items-center justify-center ">
          <div className="w-[11rem] h-5 rounded-b-[90%] bg-[#b3ac7e] scale-200 "></div>
          <div className="w-44 h-5 rounded-[50%] bg-[#887e50] scale-200"></div>
        </div>

        <div className="absolute top-1 flex flex-col-reverse items-center justify-center ">
          <div className="w-[4.72rem] h-4 rounded-b-[90%] bg-[#b3ac7e] scale-200 "></div>
          <div className="w-19 h-2 rounded-[50%] bg-[#544d31] scale-200 "></div>
        </div>
        <div className="absolute top-0 w-[60%] border-[.5rem] border-transparent border-t-[#6b6246]"></div>
      </div>
    </div>
  );
};

export default Computer;
