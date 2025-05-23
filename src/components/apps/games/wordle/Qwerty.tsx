import { MdKeyboardBackspace } from "react-icons/md";
import { GrReturn } from "react-icons/gr";
import { useWordleStore } from "../../../../store/game_store/wordleStore";

export const Qwerty = () => {
  const abcd = ["abcdefg", "hijklmn", "opqrstu", "vwxyz"];
  const { exactGuesses, allGuesses, inexactGuesses, handleKeyClick } =
    useWordleStore();

  return (
    <div className="flex flex-col items-center justify-end gap-0.5 w-full h-[30%] ">
      {abcd.map((row, idx) => (
        <div
          key={idx}
          className="flex justify-center gap-0.5 w-full h-full font-semibold lg:font-normal "
        >
          {/* Add Backspace button to the last row */}
          {idx === 3 && (
            <button
              type="button"
              className="win95-button  bg-white h-full w-full rounded lg:rounded-none flex items-center justify-center"
              onClick={() => handleKeyClick("Delete")}
            >
              <MdKeyboardBackspace className="lg:text-black text-[#38753b] text-base" />
            </button>
          )}

          {/* Render each key */}
          {row.split("").map((char, idy) => {
            const color = exactGuesses().includes(char)
              ? "bg-[#38753b] text-white"
              : inexactGuesses().includes(char)
              ? "bg-yellow-400 text-[#38753b]"
              : allGuesses().includes(char)
              ? "bg-gray-400 text-white"
              : "lg:bg-[#c3c7cb] lg:border border-[#868a8e] border-l-white border-t-white bg-white text-[#38753b]";
            return (
              <button
                type="button"
                key={idy}
                className={` uppercase h-full w-full ${color} rounded flex items-center justify-center   ${
                  char && "active:scale-95"
                } transition-transform duration-100 lg:rounded-none`}
                onClick={() => handleKeyClick(char)}
              >
                <span className="text-base py-0.5 lg:text-black ">{char}</span>
              </button>
            );
          })}

          {/* Add Return button to the last row */}
          {idx === 3 && (
            <button
              type="button"
              className="win95-button lg:bg-gray-200 bg-white h-full w-full rounded lg:rounded-none flex items-center justify-center"
              onClick={() => handleKeyClick("Enter")}
            >
              <GrReturn className="lg:text-black text-[#38753b] text-base" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
