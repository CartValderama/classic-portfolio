import { create } from "zustand";
import words from "../games/gameData/word.json";
import { useEffect } from "react";
import { Button } from "../monitor/win95/Button";

type GuessProps = {
  word: string;
  guess: string;
  isGuessed: boolean;
};

type PuzzleStoreProps = {
  word: string;
  guesses: string[];
  currentGuess: number;
  won: boolean;
  lost: boolean;
  init: () => void;
  submitGuess: () => void;
  handleKeyup: (e: KeyboardEvent) => void;

  allGuesses: () => string[];
  exactGuesses: () => string[];
  inexactGuesses: () => string[];
};

const PuzzleStore = create<PuzzleStoreProps>((set, get) => ({
  word: "",
  guesses: Array(5).fill(""),
  currentGuess: 0,
  won: false,
  lost: false,
  init: () =>
    set(() => {
      const word = words[Math.floor(Math.random() * words.length)];
      return {
        word,
        guesses: Array(5).fill(""),
        currentGuess: 0,
        won: false,
        lost: false,
      };
    }),

  submitGuess: () =>
    set((state) => {
      const guess = state.guesses[state.currentGuess];

      if (guess.length === 4) {
        const isWon = guess === state.word;
        return {
          currentGuess: state.currentGuess + 1,
          won: isWon,
          lost: state.currentGuess === 4,
        };
      }
      return {};
    }),

  handleKeyClick: (key) =>
    set((state) => {
      if (state.won || state.lost) {
        return {};
      }
      const currentGuess = state.guesses[state.currentGuess];
      if (key === "Enter") {
        state.submitGuess();
        return {};
      }
      if (key === "Delete") {
        const updatedGuess = currentGuess.slice(0, currentGuess.length - 1);
        const newGuesses = [...state.guesses];
        newGuesses[state.currentGuess] = updatedGuess;
        return { guesses: newGuesses };
      }

      if (currentGuess.length < 4 && /^[A-Za-z]$/.test(key)) {
        const updatedGuess = currentGuess + key.toLowerCase();
        const newGuesses = [...state.guesses];
        newGuesses[state.currentGuess] = updatedGuess;
        return { guesses: newGuesses };
      }

      return {};
    }),

  handleKeyup: (e) =>
    set((state) => {
      if (state.won || state.lost) {
        return {};
      }
      const currentGuess = state.guesses[state.currentGuess];
      if (e.key === "Enter") {
        state.submitGuess();
        return {};
      }
      if (e.key === "Backspace") {
        const updatedGuess = currentGuess.slice(0, currentGuess.length - 1);
        const newGuesses = [...state.guesses];
        newGuesses[state.currentGuess] = updatedGuess;
        return { guesses: newGuesses };
      }
      if (currentGuess.length < 4 && /^[A-Za-z]$/.test(e.key)) {
        const updatedGuess = currentGuess + e.key.toLowerCase();
        const newGuesses = [...state.guesses];
        newGuesses[state.currentGuess] = updatedGuess;
        return { guesses: newGuesses };
      }
      return {};
    }),

  allGuesses: () => {
    const state = get();
    return state.guesses.slice(0, state.currentGuess).join("").split("");
  },

  exactGuesses() {
    const state = get();
    return state.word
      .split("")

      .filter((letter, i) => {
        return state.guesses
          .slice(0, state.currentGuess)
          .map((word) => word[i])
          .includes(letter);
      });
  },

  inexactGuesses() {
    const state = get();
    return state.word
      .split("")
      .filter((letter) => state.allGuesses().includes(letter));
  },
}));

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
            className={`border m-0.5 min-h-10 min-w-12 flex text-xs items-center justify-center uppercase ${bgColor} `}
          >
            {guess[i]}
          </p>
        );
      })}
    </div>
  );
};

const Querty = () => {
  const qwerty = "qwertyuiopasdfghjklzxcvbnm";
  const { exactGuesses, allGuesses, inexactGuesses, handleKeyClick } =
    PuzzleStore();

  return (
    <div className="flex flex-wrap items-center justify-center text-xs gap-0.5 max-w-[20rem]">
      {qwerty.split("").map((char) => {
        const bgColor = exactGuesses().includes(char)
          ? "bg-green-400"
          : inexactGuesses().includes(char)
          ? "bg-yellow-400"
          : allGuesses().includes(char)
          ? "bg-gray-400"
          : "bg-gray-200";

        return (
          <Button
            variant={"default"}
            className={`uppercase py-1 px-2 ${bgColor}`}
            onClick={() => handleKeyClick(char)}
          >
            {char}
          </Button>
        );
      })}
      <Button
        variant={"default"}
        className="bg-gray-200 py-1 px-2"
        onClick={() => handleKeyClick("Delete")}
      >
        Del
      </Button>
      <Button
        variant={"default"}
        className="bg-gray-200 py-1 px-2"
        onClick={() => handleKeyClick("Enter")}
      >
        Enter
      </Button>
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
    <div className="flex flex-col items-center justify-center flex-1 overflow-auto bg-white border border-white border-t-none border-l-[#868a8e] leading-6 px-4 gap-y-2 font-georgia">
      <h1 className="mb-1 font-bold">
        {won ? "You Win!" : lost ? "You Lose!" : "Wordle"}
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
        className={`bg-gray-200 py-1 px-2 text-xs opacity-0 select-none cursor-auto ${
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
