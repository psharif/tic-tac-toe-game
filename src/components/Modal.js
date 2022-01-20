import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DispatchContext } from "../context/game.context";
import GameModal from "../styles/ModalStyles";


const Modal = ({ modal, winner }) => {
  const [hide, setHide] = useState(false)
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate(); 

  const nextRound = () => {
    setHide(true);
    dispatch({ type: "RESET_GRID" });
    dispatch({ type: "UPDATE_STATS", winner });
    setTimeout(() => {
      dispatch({ type: "SHOW_MODAL", modalType: "" })
      setHide(false);
    }, 500);
  };

  const reset = () => {
    setHide(true);
    setTimeout(() => {
      dispatch({ type: "RESET_GAME" });
      setHide(false);
      navigate("/");
    }, 500);
  };

  const cancel = () => {
    setHide(true);
    setTimeout(() => {
      dispatch({ type: "SHOW_MODAL", modalType: "" })
      setHide(false);
    }, 500);
  }

  return (
    <GameModal modal={modal} winner={winner} >
      {modal === "round-modal" && (
        <div className={`modal-content ${hide ? "hidden" : ""}`}>
          {winner !== "tie" && <p>Oh No, You Lost...</p>}
          <div className="main-text">
            {winner !== "tie" && winner !== "" && (
              <div className={`mask-${winner}`}></div>
            )}
            {winner !== "tie" && <h1>Takes This Round</h1>}
            {winner === "tie" && <h1>Round Tied</h1>}
          </div>
          <div className="button-row">
            <button className="grey-btn" onClick={reset}>Quit</button>
            <button className="yellow-btn" onClick={nextRound}>
              Next Round
            </button>
          </div>
        </div>
      )}
      {modal === "reset-modal" && (
        <div className={`modal-content ${hide ? "hidden" : ""}`}>
          <div className="main-text">
            <h1>Restart Game?</h1>
          </div>
          <div className="button-row">
            <button className="grey-btn" onClick={cancel} >No, Cancel</button>
            <button className="yellow-btn" onClick={reset}>
              Yes Restart
            </button>
          </div>
        </div>
      )}
    </GameModal>
  );
};

export default Modal;
