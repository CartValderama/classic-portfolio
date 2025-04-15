import { MdKeyboardBackspace } from "react-icons/md";
import { WordleStore } from "../../../store/gameStore/WordleStore";
import { Button } from "../../monitor/win95/Button";
import { GrReturn } from "react-icons/gr";

export const Qwerty = () => {
  const abcd = ["abcdefg", "hijklmn", "opqrstu", "vwxyz"];
  const { exactGuesses, allGuesses, inexactGuesses, handleKeyClick } =
    WordleStore();

  return (
    <div className="flex flex-col items-center justify-end gap-0.5 w-full h-[40%] mobile:[@media(max-height:450px)]:max-w-[500px]">
      {abcd.map((row, idx) => (
        <div
          key={idx}
          className="flex justify-center gap-0.5 w-full h-full font-semibold lg:font-normal "
        >
          {/* Add Backspace button to the last row */}
          {idx === 3 && (
            <Button
              variant={"default"}
              className="lg:bg-gray-200 bg-white h-full w-full border-0 rounded lg:border lg:rounded-none flex items-center justify-center"
              onClick={() => handleKeyClick("Delete")}
            >
              <MdKeyboardBackspace className="lg:text-black text-[#38753b] text-xl" />
            </Button>
          )}

          {/* Render each key */}
          {row.split("").map((char, idy) => {
            const color = exactGuesses().includes(char)
              ? "bg-[#38753b] text-white"
              : inexactGuesses().includes(char)
              ? "bg-yellow-400 text-[#38753b]"
              : allGuesses().includes(char)
              ? "lg:bg-gray-400 bg-gray-500 text-white"
              : "lg:bg-gray-200 bg-white text-[#38753b]";
            return (
              <Button
                key={idy}
                variant={"default"}
                className={`uppercase h-full w-full ${color} border-0 rounded flex items-center justify-center   ${
                  char && "active:scale-95"
                } transition-transform duration-100 lg:border lg:rounded-none`}
                onClick={() => handleKeyClick(char)}
              >
                <span className="text-sm mobile:[@media(max-height:450px)]:text-[.7rem] py-0.5 lg:text-black ">
                  {char}
                </span>
              </Button>
            );
          })}

          {/* Add Return button to the last row */}
          {idx === 3 && (
            <Button
              variant={"default"}
              className="lg:bg-gray-200 bg-white h-full w-full border-0 rounded lg:border lg:rounded-none flex items-center justify-center"
              onClick={() => handleKeyClick("Enter")}
            >
              <GrReturn className="lg:text-black text-[#38753b] text-xl" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
