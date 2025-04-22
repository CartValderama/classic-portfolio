import Board from "./Board";
import useTictactoeStore from "../../../../store/game_store/tictactoeStore";

const MobileTictactoe = () => {
  const { gameMode, gameStarted, setGameMode } = useTictactoeStore();

  return (
    <div className="lg:hidden flex flex-col gap-y-3 flex-1 overflow-auto p-4 bg-amber-700 text-white select-none h-full">
      <h1 className="font-bold text-5xl text-center text-amber-100 my-2">
        Tictactoe
      </h1>

      <div className="flex flex-col items-center justify-between flex-1 gap-y-2 overflow-auto">
        <div className="flex gap-x-0.5 w-full">
          <button
            type="button"
            onClick={() => setGameMode("human")}
            className={`capitalize ${
              gameStarted && "opacity-50"
            } transition-transform duration-100 bg-amber-100 text-amber-800 font-semibold px-2 py-1 w-1/2 cursor-pointer ${
              gameMode === "human" && "bg-amber-900 text-white"
            }`}
            disabled={gameStarted}
          >
            versus human
          </button>
          <button
            type="button"
            onClick={() => setGameMode("ai")}
            className={`capitalize ${
              gameStarted && "opacity-50"
            } transition-transform duration-100 bg-amber-100 text-amber-800 font-semibold px-2 py-1 w-1/2 cursor-pointer ${
              gameMode === "ai" && "bg-amber-900 text-white"
            }`}
            disabled={gameStarted}
          >
            versus computer
          </button>
        </div>

        <Board />
      </div>
    </div>
  );
};

export default MobileTictactoe;
