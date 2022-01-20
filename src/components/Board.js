import React, { useContext, useCallback, useEffect, memo } from "react";
import { DispatchContext } from "../context/game.context";
import helperFunctions from "../helperFunctions/game.helperFunctions";
import {TileDiv, GameBoard} from "../styles/BoardStyles";

const Board = ({ whosTurn, grid, winner, winSet, p2 }) => {
  /*Context */
  const dispatch = useContext(DispatchContext);
  /* Helper Function */
  const { boardChecker, computerMove } = helperFunctions(grid, dispatch);
  /* Callback Memoized Functions */
  const checkForWin = useCallback(() => {
    const oWins = boardChecker("o");
    if (oWins) return true; //Return if O wins
    const xWins = boardChecker("x");
    if (xWins) return true; //Return if X wins
    //Check for Tie
    if (grid.every((row) => row.every((cell) => cell !== ""))) {
      dispatch({ type: "SET_WINNER", winner: "tie" });
      dispatch({ type: "UPDATE_WIN_SET", winSet: {} });
      return true;
    }
    //If you didn't return true no one wins
    else {
      dispatch({ type: "SET_WINNER", winner: "" });
      dispatch({ type: "UPDATE_WIN_SET", winSet: {} });
      return false;
    }
  }, [boardChecker, grid, dispatch]);

  //Click Functions for each individual tile.
  //Moved Here because otherwise re-render 9 times for each tile.
  const clickTile = useCallback(
    (row, col, whosTurn) => {
      dispatch({ type: "UPDATE_GRID", row, col, whosTurn });
      dispatch({ type: "CHANGE_TURN", whosTurn: whosTurn === "x" ? "o" : "x" });
    },
    [dispatch]
  );
  //Adds selected class and passes row col and whosTurn to dispatch.
  const handleClick = useCallback(
    (evt, row, col, whosTurn) => {
      if(!evt.target.hasAttribute("disabled")) {
        evt.target.classList.add("selected");
        clickTile(row, col, whosTurn);
        evt.stopPropagation();
      }
    },
    [clickTile]
  );

  /* Side Effects Checks for Win During each Grid Update*/
  useEffect(() => {
    if (checkForWin()) {
      dispatch({ type: "SHOW_MODAL", modalType: "round-modal" });
    } else if(p2.type === "CPU" && p2.mark === whosTurn) {
      const oppositeSymbol = p2.mark === "x" ? "o" : "x";
      //Check For Win 
      const winMove = computerMove(p2.mark, p2.mark, false); 
      //Get Block 
      if(!winMove) {
        const blockMove = computerMove(oppositeSymbol, p2.mark, false); 
        //Move Random
        if(!blockMove) computerMove(p2.mark, p2.mark, true);
      }
    }
  }, [checkForWin, dispatch, p2, computerMove, whosTurn]);


  return (
    <GameBoard>
      {Array.from({ length: 3 }).map((el, rowIdx) => (
        <div className="row" key={`row-${rowIdx}`}>
          {Array.from({ length: 3 }).map((el, colIdx) => (
            <TileDiv
              key={`x${rowIdx}-y${colIdx}`}
              winner={winner}
              winningTile={winSet[`${rowIdx}-${colIdx}`]}
            >
              <div
                className={`mask-${
                  grid[rowIdx][colIdx] !== "" ? grid[rowIdx][colIdx] : whosTurn
                } ${grid[rowIdx][colIdx] !== "" ? "selected" : ""}`}
                onClick={(evt) => handleClick(evt, rowIdx, colIdx, whosTurn)}
                disabled={grid[rowIdx][colIdx] !== "" ? true : ""}
              ></div>
            </TileDiv>
          ))}
        </div>
      ))}
    </GameBoard>
  );
};

export default memo(Board);
