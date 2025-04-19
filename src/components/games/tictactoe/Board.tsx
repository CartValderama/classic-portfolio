import useTicTacToeStore from "../../../store/game_store/tictactoeStore";

const Board = () => {
  const { board, winner, isDraw, resetGame, makeMove } = useTicTacToeStore();
  return (
    <div className="grid grid-cols-3 justify-items-center place-items-center flex-1 w-full lg:border border-white border-l-[#868a8e] border-t-[#868a8e] lg:gap-0 gap-2 relative mobile:[@media(max-height:450px)]:max-w-[500px]">
      {(winner || isDraw) && (
        <button
          type="button"
          onClick={resetGame}
          className="lg:text-black active:scale-95 transition-transform duration-100 text-amber-100 bg-amber-800 font-semibold px-4 py-3 absolute capitalize lg:hidden text-3xl"
        >
          <p>
            <span className="lg:underline uppercase ">P</span>lay Again
          </p>
        </button>
      )}

      {board.map((cell, index) => (
        <button
          type="button"
          key={index}
          className="win95-button w-full h-full flex justify-center items-center text-4xl lg:bg-transparent bg-amber-100 lg:border border-0 lg:text-black font-bold text-amber-800"
          onClick={() => makeMove(index)}
          disabled={!!cell || !!winner || isDraw}
        >
          {cell || <span className="opacity-0">X</span>}
        </button>
      ))}
    </div>
  );
};

export default Board;
