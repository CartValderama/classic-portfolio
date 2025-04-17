import useTicTacToeStore from "../../store/gameStore/TitactoeStore";
import { useEffect } from "react";
import { useApplicationStore } from "../../store/AppStore/ApplicationStore";
import Board from "./tictactoe/Board";

// Constants
const PLAYER_X = "X";

const Tictactoe = () => {
  const {
    board,
    currentPlayer,
    gameMode,
    gameStarted,
    winner,
    isDraw,
    setGameMode,
    resetGame,
  } = useTicTacToeStore();

  const { openWindows } = useApplicationStore();

  useEffect(() => {
    return () => {
      if (!openWindows["tictactoe"]) resetGame();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openWindows]);

  return (
    <div className="relative flex flex-col flex-1 overflow-auto lg:px-0.5 lg:h-auto h-full lg:bg-transparent bg-amber-700 lg:text-black text-white lg:p-0 p-4 select-none">
      <div className="h-7 border-b  border-b-[#868a8e] items-center gap-x-4  p-1 py-2 lg:flex hidden">
        <button
          className="win95-select lowercase lg:text-black text-white hover:bg-transparent transition-transform duration-100"
          onClick={resetGame}
        >
          {board.every((cell) => cell !== null) ? (
            <p>
              <span className="lg:underline uppercase ">P</span>lay Again
            </p>
          ) : (
            <p>
              <span className="lg:underline uppercase ">R</span>estart
            </p>
          )}
        </button>
        <button
          className={`win95-select lowercase  ${
            gameStarted && "opacity-50"
          } lg:text-black text-white hover:bg-transparent transition-transform duration-100 ${
            gameMode === "human" && "underline"
          }`}
          onClick={() => setGameMode("human")}
          disabled={gameStarted}
        >
          <span className="lg:underline uppercase">H</span>
          <span className={`${gameMode === "human" && "underline"}`}>uman</span>
        </button>
        <button
          className={`win95-select lowercas ${
            gameStarted && "opacity-50"
          } lg:text-black text-white hover:bg-transparent transition-transform duration-100 lowercase ${
            gameMode === "ai" && "underline"
          }`}
          onClick={() => setGameMode("ai")}
          disabled={gameStarted}
        >
          <span className="lg:underline uppercase">C</span>
          <span className={`${gameMode === "ai" && "underline"}`}>omputer</span>
        </button>
      </div>
      <h1 className="lg:hidden font-bold text-5xl mobile:[@media(max-height:450px)]:hidden text-center text-amber-100 my-2 mobile:[@media(max-height:450px)]:m-0">
        Tictactoe
      </h1>

      <div className="flex flex-col items-center justify-between flex-1 gap-y-2 overflow-auto lg:border border-white border-t-none border-r-[#868a8e] border-b-[#868a8e] text-[.85rem] leading-6 p-2 lg:p-1 ">
        <div className="flex items-center lg:justify-between justify-center lg:border border-white border-l-[#868a8e] border-t-[#868a8e] w-full mobile:[@media(max-height:450px)]:mt-0 mt-2 mb-2 lg:m-0 lg:p-2 mobile:[@media(max-height:450px)]:max-w-[500px]">
          <div className="lg:block hidden 3xl:text-base">
            {winner && <p>{winner === PLAYER_X ? "X wins!" : "O wins!"}</p>}
            {isDraw && <p>It's a draw!</p>}
            <p className={winner || isDraw ? "hidden" : ""}>
              Current Player: {currentPlayer}
            </p>
          </div>
          <div className="lg:hidden flex gap-x-0.5 w-full">
            <button
              onClick={() => setGameMode("human")}
              className={`capitalize ${
                gameStarted && "opacity-50"
              } lg:text-black active:scale-95 transition-transform duration-100 bg-amber-100 text-amber-800 font-semibold px-2 py-1 w-1/2 cursor-pointer ${
                gameMode === "human" && "bg-amber-900 text-white"
              }`}
              disabled={gameStarted}
            >
              versus human
            </button>
            <button
              onClick={() => setGameMode("ai")}
              className={`capitalize ${
                gameStarted && "opacity-50"
              } lg:text-black active:scale-95 transition-transform duration-100 bg-amber-100 text-amber-800 font-semibold px-2 py-1 w-1/2 cursor-pointer ${
                gameMode === "ai" && "bg-amber-900 text-white"
              }`}
              disabled={gameStarted}
            >
              versus computer
            </button>
          </div>
          <p className="lg:block hidden 3xl:text-base">
            You vs{" "}
            <span
              className={`${gameMode === "ai" ? "uppercase" : "capitalize"}`}
            >
              {gameMode}
            </span>
          </p>
        </div>
        <Board />
      </div>
    </div>
  );
};

export default Tictactoe;
