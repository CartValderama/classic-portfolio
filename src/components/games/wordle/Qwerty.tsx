import { MdKeyboardBackspace } from "react-icons/md";
import { PuzzleStore } from "../../../store/gameStore/PuzzleStore";
import { Button } from "../../monitor/win95/Button";
import { GrReturn } from "react-icons/gr";

export const Qwerty = () => {
  const abcd = ["abcdefg", "hijklmn", "opqrstu", "vwxyz"];
  const { exactGuesses, allGuesses, inexactGuesses, handleKeyClick } =
    PuzzleStore();

  return (
    <div className="flex flex-col items-center justify-end gap-0.5 w-full h-[35%] ">
      {abcd.map((row, idx) => (
        <div
          key={idx}
          className="flex justify-center gap-0.5 w-full h-full font-semibold lg:font-normal"
        >
          {/* Add Backspace button to the last row */}
          {idx === 3 && (
            <Button
              variant={"default"}
              className="bg-gray-200 h-full w-full border-0 rounded lg:border lg:rounded-none flex items-center justify-center"
              onClick={() => handleKeyClick("Delete")}
            >
              <MdKeyboardBackspace />
            </Button>
          )}

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
                className={`uppercase h-full w-full ${bgColor} border-0 rounded flex items-center justify-center ${
                  char && "active:scale-95"
                } transition-transform duration-100 lg:border lg:rounded-none`}
                onClick={() => handleKeyClick(char)}
              >
                <span className="text-sm mobile:[@media(max-height:450px)]:text-[.7rem] py-0.5">
                  {char}
                </span>
              </Button>
            );
          })}

          {/* Add Return button to the last row */}
          {idx === 3 && (
            <Button
              variant={"default"}
              className="bg-gray-200 h-full w-full border-0 rounded lg:border lg:rounded-none flex items-center justify-center"
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
