import { useEffect } from "react";
import { Button } from "../monitor/win95/Button";
import { MdKeyboardBackspace } from "react-icons/md";
import { GrReturn } from "react-icons/gr";
import { GuessProps, PuzzleStore } from "../../store/gameStore/PuzzleStore";

const Guess = ({ word, guess, isGuessed }: GuessProps) => {
  return (
    <div className="grid grid-cols-4">
      {new Array(4).fill(0).map((_, i) => {
        const bgColor = !isGuessed
          ? "bg-white"
          : guess[i] === word[i]
          ? "bg-green-400"
          : word.includes(guess[i])
          ? "bg-[#c3c7cb]"
          : "bg-white";

        return (
          <p
            key={i}
            className={`border m-0.5 min-h-12 min-w-14 flex items-center justify-center uppercase ${bgColor} `}
          >
            {guess[i]}
          </p>
        );
      })}
    </div>
  );
};

const Querty = () => {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const { exactGuesses, allGuesses, inexactGuesses, handleKeyClick } =
    PuzzleStore();

  return (
    <div className="flex flex-wrap items-center justify-center gap-0.5 max-w-[20rem] ">
      {qwerty.map((row, idx) => (
        <div key={idx} className="flex justify-center gap-0.5">
          {/* Render each key */}
          {row.split("").map((char, idy) => {
            const bgColor = exactGuesses().includes(char)
              ? "bg-green-400"
              : inexactGuesses().includes(char)
              ? "bg-yellow-400"
              : allGuesses().includes(char)
              ? "bg-gray-400"
              : "bg-gray-200";
            return (
              <Button
                key={idy}
                variant={"default"}
                className={`uppercase px-2 py-1 ${bgColor}`}
                onClick={() => handleKeyClick(char)}
              >
                {char}
              </Button>
            );
          })}

          {/* Add Backspace button to the first row */}
          {idx === 0 && (
            <Button
              variant={"default"}
              className="bg-gray-200 px-2 py-1"
              onClick={() => handleKeyClick("Delete")}
            >
              <MdKeyboardBackspace />
            </Button>
          )}

          {/* Add Return button to the middle row */}
          {idx === Math.floor(qwerty.length / 2) && (
            <Button
              variant={"default"}
              className="bg-gray-200 px-2 py-1"
              onClick={() => handleKeyClick("Enter")}
            >
              <GrReturn />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

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
        <Querty />
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
