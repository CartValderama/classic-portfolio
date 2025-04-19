import { create } from "zustand";
import words from "./gameData/word.json";

type WordleStoreProps = {
  word: string;
  guesses: string[];
  currentGuess: number;
  won: boolean;
  lost: boolean;
  init: () => void;
  submitGuess: () => void;
  handleKeyup: (e: KeyboardEvent) => void;
  handleKeyClick: (e: string) => void;
  allGuesses: () => string[];
  exactGuesses: () => string[];
  inexactGuesses: () => string[];
};

export const useWorldStore = create<WordleStoreProps>((set, get) => ({
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
