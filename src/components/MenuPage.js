import React, { useState, useContext } from "react";
import { DispatchContext } from "../context/game.context";
import { MarkButton, GameMenu } from "../styles/MenuPageStyles";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const dispatch = useContext(DispatchContext);
  const [state, setState] = useState("x");
  const navigate = useNavigate();

  const handleClick = (evt) => {
    const mark = state;
    evt.preventDefault();
    if (evt.target.innerText.includes("CPU")) {
      dispatch({ type: "SET_PLAYER_TYPES", p1Type: "Person", p2Type: "CPU" });
    } else {
      dispatch({
        type: "SET_PLAYER_TYPES",
        p1Type: "Person",
        p2Type: "Person",
      });
    }
    dispatch({
      type: "SET_PLAYER_MARKS",
      p1Mark: mark,
      p2Mark: mark === "x" ? "o" : "x",
    });
    navigate("/game");
  };

  return (
    <GameMenu>
      <div className="content">
        <div className="icon-row">
          <img src="../assets/icon-x.svg" alt="x-svg" />
          <img src="../assets/icon-o.svg" alt="o-svg" />
        </div>
        <div className="player-choice-container">
          <h1>Pick Player 1's Mark</h1>
          <div className="button-row">
            <MarkButton
              mark={"x"}
              onClick={() => setState("x")}
              selected={state === "x"}
            >
              <div className="mask"></div>
            </MarkButton>
            <MarkButton
              mark={"o"}
              onClick={() => setState("o")}
              selected={state === "o"}
            >
              <div className="mask"></div>
            </MarkButton>
          </div>
          <p>Remember : X Goes First</p>
        </div>
        <button className="cpu-new-btn" type="button" onClick={handleClick}>
          New Game (vs CPU)
        </button>
        <button className="player-new-btn" type="button" onClick={handleClick}>
          New Game (vs Player)
        </button>
      </div>
    </GameMenu>
  );
};

export default MenuPage;
