import Board from "./Board";
import useTictactoeStore from "../../../../store/game_store/tictactoeStore";

const DesktopTicTacToe = () => {
  const {
    board,
    currentPlayer,
    gameMode,
    gameStarted,
    winner,
    isDraw,
    setGameMode,
    resetGame,
  } = useTictactoeStore();

  const buttonBaseClasses =
    "win95-select lowercase text-black hover:bg-transparent transition-transform duration-100";
  const underlineSpanClasses = "underline uppercase";

  const gameModes = [
    { value: "human", display: "Human" },
    { value: "ai", display: "Computer" },
  ];

  return (
    <div className="hidden lg:flex flex-col flex-1 overflow-auto px-0.5 h-auto bg-transparent text-black text-lg select-none">
      <div className="h-7 border-b border-b-[#868a8e] items-center gap-x-4 p-1 py-2 flex">
        <button type="button" className={buttonBaseClasses} onClick={resetGame}>
          {board.every((cell) => cell !== null) ? (
            <p>
              <span className={underlineSpanClasses}>P</span>lay Again
            </p>
          ) : (
            <p>
              <span className={underlineSpanClasses}>R</span>estart
            </p>
          )}
        </button>

        {gameModes.map((mode) => (
          <button
            key={mode.value}
            type="button"
            className={`${buttonBaseClasses} ${gameStarted && "opacity-50"} ${
              gameMode === mode.value && "underline"
            }`}
            onClick={() => setGameMode(mode.value as "human" | "ai")}
            disabled={gameStarted}
          >
            <span className={underlineSpanClasses}>
              {mode.display[0].toUpperCase()}
            </span>
            <span>{mode.display.slice(1)}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between flex-1 gap-y-2 overflow-auto border border-white border-t-none border-r-[#868a8e] border-b-[#868a8e] p-1">
        <div className="flex items-center justify-between w-full p-2 border border-white border-l-[#868a8e] border-t-[#868a8e]">
          <div className="text-lg">
            {winner && <p>{winner} wins!</p>}
            {isDraw && <p>It's a draw!</p>}
            {!(winner || isDraw) && <p>Current Player: {currentPlayer}</p>}
          </div>
          <p className="text-lg">
            You vs <span>{gameMode === "ai" ? "Computer" : "Human"}</span>
          </p>
        </div>
        <Board />
      </div>
    </div>
  );
};

export default DesktopTicTacToe;
