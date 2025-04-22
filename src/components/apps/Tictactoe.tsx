import { useEffect } from "react";
import { useApplicationStore } from "../../store/applicationStore";
import useTicTacToeStore from "../../store/game_store/tictactoeStore";
import DesktopTicTacToe from "./games/tictactoe/DesktopTictactoe";
import MobileTictactoe from "./games/tictactoe/MobileTictactoe";

const TicTacToe = () => {
  const { resetGame } = useTicTacToeStore();
  const { openWindows } = useApplicationStore();

  useEffect(() => {
    return () => {
      if (!openWindows["tictactoe"]) resetGame();
    };
  }, [openWindows, resetGame]);

  return (
    <>
      <DesktopTicTacToe />
      <MobileTictactoe />
    </>
  );
};

export default TicTacToe;
