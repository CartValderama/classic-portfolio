import { GuessProps } from "../../../store/gameStore/PuzzleStore";

export const Guess = ({ word, guess, isGuessed }: GuessProps) => {
  return (
    <div className="flex w-full h-full gap-1">
      {new Array(4).fill(0).map((_, i) => {
        const color = !isGuessed
          ? "bg-white "
          : guess[i] === word[i]
          ? "bg-[#38753b] text-white"
          : word.includes(guess[i])
          ? "bg-yellow-400 text-black"
          : "bg-white text-[#38753b]";

        return (
          <p
            key={i}
            className={`lg:border w-full flex items-center justify-center uppercase ${color} font-bold`}
          >
            {guess[i]}
          </p>
        );
      })}
    </div>
  );
};
