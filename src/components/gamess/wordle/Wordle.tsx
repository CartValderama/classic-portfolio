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
    <div className="flex flex-col items-center justify-start flex-1 h-full lg:h-auto overflow-auto bg-white border border-white border-t-none border-l-[#868a8e] leading-6 px-4 gap-y-2">
      <h1 className="my-2 text-xl font-bold">
        {won ? "You Win!" : lost ? "You Lose!" : "Guess The Word"}
      </h1>

      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col items-center">
          {guesses.map((_, i) => (
            <Guess
              key={i}
              word={word}
              guess={guesses[i]}
              isGuessed={i < currentGuess}
            />
          ))}
        </div>
        <Qwerty />
      </div>

      <Button
        variant={"default"}
        className={`bg-gray-200 p-2 opacity-0 select-none cursor-auto ${
          (lost || won) && "opacity-100 select-all cursor-pointer"
        }`}
        disabled={!(won || lost)}
        onClick={() => init()}
      >
        Play Again
      </Button>
    </div>
  );
};

export default Wordle;
