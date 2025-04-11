// store/tictactoeStore.ts
import { create } from "zustand";

type Player = "X" | "O";
type CellValue = null | Player;
type Board = CellValue[];
type GameMode = "human" | "ai";

interface TicTacToeStore {
  board: Board;
  currentPlayer: Player;
  gameMode: GameMode;
  gameStarted: boolean; // New state to track if game has started
  gameLocked: boolean;
  winner: Player | null;
  isDraw: boolean;
  setBoard: (board: Board) => void;
  setCurrentPlayer: (player: Player) => void;
  setGameMode: (mode: GameMode) => void;
  setGameStarted: (started: boolean) => void;
  setGameLocked: (locked: boolean) => void;
  resetGame: () => void;
  makeMove: (index: number) => void;
  checkWinner: () => Player | null;
  checkDraw: () => boolean;
  getAIMove: () => number;
}

const useTicTacToeStore = create<TicTacToeStore>((set, get) => {
  // Helper functions (keep the same as before)
  const checkWinner = (board: Board): Player | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const minimax = (
    board: Board,
    depth: number,
    isMaximizing: boolean
  ): number => {
    const winner = checkWinner(board);
    if (winner === "O") return 1;
    if (winner === "X") return -1;
    if (board.every((cell) => cell !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const getAIMove = (): number => {
    const { board } = get();
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = "O";
        const score = minimax(newBoard, 0, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  return {
    board: Array(9).fill(null),
    currentPlayer: "X",
    gameMode: "human",
    gameStarted: false, // Initialize as false
    gameLocked: false,
    winner: null,
    isDraw: false,

    setBoard: (board) => set({ board }),
    setCurrentPlayer: (currentPlayer) => set({ currentPlayer }),
    setGameMode: (gameMode) => set({ gameMode }),
    setGameStarted: (gameStarted) => set({ gameStarted }),
    setGameLocked: (gameLocked) => set({ gameLocked }),

    resetGame: () =>
      set({
        board: Array(9).fill(null),
        currentPlayer: "X",
        gameStarted: false, // Reset to false
        gameLocked: false,
        winner: null,
        isDraw: false,
      }),

    makeMove: (index) => {
      const { board, currentPlayer, gameMode, gameLocked, gameStarted } = get();

      if (board[index] || gameLocked) return;

      // Mark game as started on first move
      if (!gameStarted) {
        set({ gameStarted: true });
      }

      // Make the move
      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      // Check for winner or draw
      const winner = checkWinner(newBoard);
      const isDraw = !winner && newBoard.every((cell) => cell !== null);

      set({
        board: newBoard,
        gameLocked: true,
        winner,
        isDraw,
      });

      // If game is over, return
      if (winner || isDraw) return;

      // Switch turns
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      set({ currentPlayer: nextPlayer });

      // AI move if in AI mode and it's AI's turn
      if (gameMode === "ai" && nextPlayer === "O") {
        const aiMove = getAIMove();
        const aiBoard = [...newBoard];
        aiBoard[aiMove] = "O";

        const aiWinner = checkWinner(aiBoard);
        const aiIsDraw = !aiWinner && aiBoard.every((cell) => cell !== null);

        set({
          board: aiBoard,
          currentPlayer: "X",
          winner: aiWinner,
          isDraw: aiIsDraw,
          gameLocked: !!(aiWinner || aiIsDraw),
        });
      } else {
        set({ gameLocked: false });
      }
    },

    checkWinner: () => {
      const { board } = get();
      return checkWinner(board);
    },

    checkDraw: () => {
      const { board } = get();
      return !checkWinner(board) && board.every((cell) => cell !== null);
    },

    getAIMove,
  };
});

export default useTicTacToeStore;
