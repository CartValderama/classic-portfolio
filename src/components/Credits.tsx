import { useState } from "react";

const Credits = () => {
  const [currentCredit, setCurrentCredit] = useState(0);

  const credits = [
    {
      task: "Acknowledging",
      people: "Those that contributed to this project",
    },
    {
      task: "Developer",
      people: "Cart Valderama",
    },
    {
      task: "Designer",
      people: "Cart Valderama",
    },
    {
      task: "Monitor Design",
      people: "Jhon Valderama",
    },
    {
      task: "Critique",
      people: "Maryle Valderama, Jhon Valderama ",
    },
    {
      task: "Inspiration",
      people: "Windows 95 operating system",
    },
  ];

  const handleClick = () => {
    setCurrentCredit((prev) => (prev + 1) % credits.length);
  };

  return (
    <div
      className="relative h-full w-full flex flex-1 items-center justify-center bg-black overflow-hidden select-none"
      onClick={handleClick}
    >
      <div className="flex flex-col flex-1 items-center justify-center max-w-xl px-4 text-base text-center gap-y-20 text-white z-20">
        <div className="flex flex-col gap-y-4 text-3xl">
          <p className="font-bold text-6xl">{credits[currentCredit].task}</p>
          <p className="">{credits[currentCredit].people}</p>
        </div>

        <p className="text-lg">
          {currentCredit !== credits.length - 1
            ? "[Click to the screen to continue]"
            : "[Return to the beginning]"}
        </p>
      </div>
      <div className="absolute text-white animate-dvd z-10">
        <p className="text-5xl font-dvd font-bold animate-fontcolor opacity-40">
          Credits
        </p>
      </div>
    </div>
  );
};

export default Credits;
