import { RiShutDownLine } from "react-icons/ri";
const Computer = () => {
  return (
    <div className="bg-[#dbd49d] w-[33rem] h-[25rem] relative rounded-2xl flex justify-center items-start py-5">
      {/* monitor screen*/}
      <div className="w-[29rem] h-[19.7rem] rounded-2xl relative flex justify-center items-start">
        <div className="absolute bg-[#a0926f] w-full h-full opacity-40 rounded-xl"></div>
        <div className="absolute top-1 left-[.35rem] w-[97.5%] border-[1.7rem] border-transparent border-t-[#847959] rounded"></div>
        <div className="absolute top-1 left-1  h-[97.5%] border-[1.7rem] border-b-[1.5rem] border-transparent border-l-[#a0926f] rounded"></div>
        <div className="absolute top-1 right-1 h-[97.5%] border-[1.7rem] border-b-[1.5rem] border-transparent border-r-[#a0926f] rounded"></div>
        <div
          className="mt-7 bg-[#0b0b0b] w-[25.5rem] h-[16.5rem] flex items-center 
              justify-center shadow-inner rounded-xl scale-102"
        >
          {/* main screen */}
          <div></div>
          {/* monitor buttons*/}
          <div className="absolute -bottom-18 flex flex-row-reverse items-baseline justify-between w-full">
            <div className="flex flex-row-reverse gap-x-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#aba072] text-[#8d845f] text-xs">
                <RiShutDownLine />
              </div>
              <div className="flex gap-x-1 items-center">
                <span className="w-8 h-[.5rem] bg-[#aba072]"></span>
                <span className="w-8 h-[.5rem] bg-[#aba072] "></span>
                <span className="w-8 h-[.5rem] bg-[#aba072] "></span>
                <span className="w-8 h-[.5rem] bg-[#aba072] "></span>
              </div>
            </div>

            <p className="text-xs text-[#a0926f] font-semibold font-times">
              ViewSonic
            </p>
          </div>
        </div>
      </div>

      {/* monitor stand */}
      <div className="absolute -bottom-[4.04rem] w-full flex flex-col items-center justify-center scale-105 -z-40">
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
  );
};

export default Computer;
