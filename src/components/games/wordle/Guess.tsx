import { GuessProps } from "../../../store/gameStore/PuzzleStore";

export const Guess = ({ word, guess, isGuessed }: GuessProps) => {
  return (
    <div className="flex w-[85%] h-full gap-x-0.5">
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
            className={`border w-full h-full flex items-center justify-center uppercase ${bgColor} `}
          >
            {guess[i]}
          </p>
        );
      })}
    </div>
  );
};
