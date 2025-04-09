import { useEffect } from "react";
import { Button } from "../../monitor/win95/Button";
import { PuzzleStore } from "../../../store/gameStore/PuzzleStore";
import { Qwerty } from "./Qwerty";
import { Guess } from "./Guess";

const Wordle = () => {
  const { init, word, guesses, currentGuess, handleKeyup, won, lost } =
    PuzzleStore();

  useEffect(() => {
    init();
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full overflow-auto bg-white border border-white border-t-none border-l-[#868a8e] leading-6 px-4 gap-y-3 py-4 ">
      <div className="flex flex-col items-center gap-y-3 w-full h-[70%] mobile:[@media(max-height:550px)]:min-h-[20rem]">
        <h1 className=" text-2xl font-bold">
          {won ? "You Win!" : lost ? "You Lose!" : "Guess The Word"}
        </h1>
        <div className="flex flex-col items-center w-full h-full gap-y-0.5">
          {guesses.map((_, i) => (
            <Guess
              key={i}
              word={word}
              guess={guesses[i]}
              isGuessed={i < currentGuess}
            />
          ))}
        </div>
        <Button
          variant={"default"}
          className={` ${
            won
              ? "bg-green-900 text-white lg:bg-gray-200 lg:text-black"
              : "bg-red-900 text-white lg:bg-gray-200 lg:text-black"
          } py-3 px-4  hidden border-0 rounded lg:border-1 lg:rounded-none w-[45%] ${
            (lost || won) &&
            "flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-semibold lg:font-normal"
          }`}
          onClick={() => init()}
        >
          Play Again
        </Button>
      </div>
      <Qwerty />
    </div>
  );
};

export default Wordle;
