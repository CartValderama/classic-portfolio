import { useState } from "react";
import { Button } from "../monitor/win95/Button";

// Constants
const EMPTY = null;
const PLAYER_X = "X";
const PLAYER_O = "O";

// Type for the board
type Board = (null | "X" | "O")[];

// Function to check for a winner
const checkWinner = (board: Board): "X" | "O" | null => {
  const winningCombinations = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

// Minimax algorithm
const minimax = (
  board: Board,
  depth: number,
  isMaximizing: boolean
): number => {
  const winner = checkWinner(board);

  if (winner === PLAYER_O) return 1; // AI wins
  if (winner === PLAYER_X) return -1; // Player wins
  if (board.every((cell) => cell !== EMPTY)) return 0; // Draw

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        board[i] = PLAYER_O;
        const score = minimax(board, depth + 1, false);
        board[i] = EMPTY;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        board[i] = PLAYER_X;
        const score = minimax(board, depth + 1, true);
        board[i] = EMPTY;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

// AI move using Minimax
const getAIMove = (board: Board): number => {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === EMPTY) {
      board[i] = PLAYER_O;
      const score = minimax(board, 0, false);
      board[i] = EMPTY;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.random() < 0.5 ? PLAYER_X : PLAYER_O
  );
  const [gameMode, setGameMode] = useState<"human" | "ai">("human");
  const [control, setControl] = useState(false);

  const handleWinner = (board: Board) => {
    checkWinner(board);
    setControl(false);
  };

  const handleClick = (index: number) => {
    if (board[index] || handleWinner(board)) return;

    //lock select game mode
    setControl(true);
    // Current player's move
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Check for a winner or draw
    const winner = checkWinner(newBoard);
    if (winner || newBoard.every((cell) => cell !== EMPTY)) return;

    // Switch turns
    const nextPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    setCurrentPlayer(nextPlayer);

    // AI's move (if in AI mode and it's AI's turn)
    if (gameMode === "ai" && nextPlayer === PLAYER_O) {
      const aiMove = getAIMove(newBoard);
      newBoard[aiMove] = PLAYER_O;
      setBoard(newBoard);
      setCurrentPlayer(PLAYER_X);
    }
  };

  const resetGame = () => {
    setControl(false);
    setBoard(Array(9).fill(EMPTY));
    setCurrentPlayer(Math.random() < 0.5 ? PLAYER_X : PLAYER_O); // Randomize starting player
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== EMPTY);

  return (
    <div className="relative flex flex-col flex-1 overflow-auto px-0.5">
      <div className="h-7 border-b  border-b-[#868a8e] flex items-center gap-x-4 p-1">
        <Button variant={"subtle"} onClick={resetGame} className="lowercase">
          <span className="underline uppercase">R</span>estart
        </Button>
        <Button
          variant={"subtle"}
          onClick={() => setGameMode("human")}
          className={`lowercase ${control && "opacity-50"}`}
          disabled={control}
        >
          <span className="underline uppercase">H</span>uman
        </Button>
        <Button
          variant={"subtle"}
          onClick={() => setGameMode("ai")}
          className={` ${control && "opacity-50"}`}
          disabled={control}
        >
          <span className="underline uppercase">A</span>I
        </Button>
      </div>
      <div className="flex flex-col items-center justify-between flex-1 gap-y-2 overflow-auto border border-white border-t-none border-r-[#868a8e] border-b-[#868a8e] text-[.85rem] leading-6 p-2 ">
        <div className="flex items-center justify-between border border-white border-l-[#868a8e] border-t-[#868a8e] w-full p-2">
          <div>
            {winner && <p>{winner === PLAYER_X ? "X wins!" : "O wins!"}</p>}
            {isDraw && <p>It's a draw!</p>}
            <p className={winner || isDraw ? "hidden" : ""}>
              Current Player: {currentPlayer}
            </p>
          </div>
          <p>
            Human vs{" "}
            <span
              className={`${gameMode === "ai" ? "uppercase" : "capitalize"}`}
            >
              {gameMode}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-3 justify-items-center place-items-center flex-1 w-full border border-white border-l-[#868a8e] border-t-[#868a8e]">
          {board.map((cell, index) => (
            <Button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner || isDraw}
              className="w-full h-[70px]  text-3xl"
            >
              {cell}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
