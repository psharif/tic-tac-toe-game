import { useContext } from "react";
import { DispatchContext } from "../context/game.context";
import GameHeaderRow from "../styles/HeaderRowStyles";

const HeaderRow = ({ whosTurn }) => {
  const dispatch = useContext(DispatchContext);

  const resetModal = () => {
    dispatch({ type: "SHOW_MODAL", modalType: "reset-modal" });
  };
  return (
    <GameHeaderRow imgUrl={`../assets/icon-${whosTurn}.svg`}>
      <div className="icon-group">
        <img src="../assets/icon-x.svg" alt="x-img" />
        <img src="../assets/icon-o.svg" alt="o-img" />
      </div>
      <div className="turn-prompt">
        <div className="mask"></div>
        <p>TURN</p>
      </div>
      <button className="restart-btn" onClick={resetModal}>
        <img src="../assets/icon-restart.svg" alt="restart-img"></img>
      </button>
    </GameHeaderRow>
  );
};

export default HeaderRow;
