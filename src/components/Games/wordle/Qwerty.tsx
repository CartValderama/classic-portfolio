import { MdKeyboardBackspace } from "react-icons/md";
import { PuzzleStore } from "../../../store/gameStore/PuzzleStore";
import { Button } from "../../monitor/win95/Button";
import { GrReturn } from "react-icons/gr";

export const Qwerty = () => {
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
