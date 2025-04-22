import { useState } from "react";
import { credits } from "../../data/credits";

const Credits = () => {
  const [currentCredit, setCurrentCredit] = useState(0);

  const handleClick = () => {
    setCurrentCredit((prev) => (prev + 1) % credits.length);
  };

  return (
    <div className="relative flex justify-center items-center h-full w-full overflow-hidden select-none lg:bg-black bg-yellow-50">
      <div
        onClick={handleClick}
        className=" flex justify-center items-center lg:w-full lg:h-full min-w-sm min-h-[25rem] lg:bg-black lg:text-white text-amber-950 lg:border-0 lg:outline-0 outline-20 outline-yellow-100 border-yellow-200 border-10 bg-white lg:rounded-none rounded-full p-4"
      >
        <div className="flex flex-col flex-1 items-center justify-center max-w-xl lg:px-4 px-0 text-base text-center gap-y-20 z-20 ">
          <div className="flex flex-col gap-y-4 lg:text-2xl text-lg">
            <p className="font-bold lg:text-6xl text-4xl">
              {credits[currentCredit].task}
            </p>
            <div className="h-10">
              {credits[currentCredit].people.map((name, idx) => (
                <p key={idx}>{name}</p>
              ))}
            </div>
          </div>

          <p className="lg:text-lg text-sm lg:animate-none animate-bounce">
            {currentCredit !== credits.length - 1
              ? "[Press this the area to continue]"
              : "[Return to the beginning]"}
          </p>
        </div>
        <div className="lg:block hidden absolute text-white animate-dvd z-10">
          <p className="text-5xl font-dvd font-bold animate-fontcolor opacity-40">
            Credit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
