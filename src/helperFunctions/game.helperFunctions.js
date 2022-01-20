import { useCallback } from "react/cjs/react.development";
const useHelperFunctions = (grid, dispatch) => {
  return {
    boardChecker: useCallback(
      (ch) => {
        //All horizontals (3)
        //Top Row, Middle Row, Bottom Row.
        let count = 0;
        let winSet = {};
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (grid[row][col] === ch) {
              count++;
              winSet[`${row}-${col}`] = true;
            }
          }
          if (count === 3) {
            dispatch({ type: "SET_WINNER", winner: ch });
            dispatch({ type: "UPDATE_WIN_SET", winSet: winSet });
            return true;
          }
          count = 0;
          winSet = {};
        }

        //All verticals (3)
        //Left Column, Middle Column, Right Column.
        for (let col = 0; col < 3; col++) {
          for (let row = 0; row < 3; row++) {
            if (grid[row][col] === ch) {
              count++;
              winSet[`${row}-${col}`] = true;
            }
          }
          if (count === 3) {
            dispatch({ type: "SET_WINNER", winner: ch });
            dispatch({ type: "UPDATE_WIN_SET", winSet: winSet });
            return true;
          }

          count = 0;
          winSet = {};
        }
        //Check Diagonals
        //Top Left to Bottom Right
        for (let idx = 0; idx < 3; idx++) {
          if (grid[idx][idx] === ch) {
            count++;
            winSet[`${idx}-${idx}`] = true;
          }
        }
        if (count === 3) {
          dispatch({ type: "SET_WINNER", winner: ch });
          dispatch({ type: "UPDATE_WIN_SET", winSet: winSet });
          return true;
        }

        //Top Right to Bottom Left
        count = 0;
        winSet = {};
        for (let idx = 2; idx >= 0; idx--) {
          if (grid[2 - idx][idx] === ch) {
            count++;
            winSet[`${2 - idx}-${idx}`] = true;
          }
        }
        if (count === 3) {
          dispatch({ type: "SET_WINNER", winner: ch });
          dispatch({ type: "UPDATE_WIN_SET", winSet: winSet });
          return true;
        }

        return false;
      },
      [grid, dispatch]
    ),
      /* Chooses where to move if player is CPU (Computer) */
    computerMove: useCallback((symbolToCheck, symbolToWrite, random) => {
        //Checks for wins or blocks
        if(!random) {
          //Rows first. 
          for(let i = 0; i < 3; i++) {
            if(grid[i][0] === symbolToCheck && grid[i][1] === symbolToCheck && grid[i][2] === "") {
              dispatch({ type: "UPDATE_GRID", row: i, col: 2, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
            else if(grid[i][0] === symbolToCheck && grid[i][1] === "" && grid[i][2] === symbolToCheck) {
              dispatch({ type: "UPDATE_GRID", row: i, col: 1, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
            else if(grid[i][0] === "" && grid[i][1] === symbolToCheck && grid[i][2] === symbolToCheck) {
              dispatch({ type: "UPDATE_GRID", row: i, col: 0, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
          }
    
          //Columns second. 
          for(let i = 0; i < 3; i++) {
            if(grid[0][i] === symbolToCheck && grid[1][i] === symbolToCheck && grid[2][i] === "") {
              dispatch({ type: "UPDATE_GRID", row: 2, col: i, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
            else if(grid[0][i] === symbolToCheck && grid[1][i] === "" && grid[2][i] === symbolToCheck) {
              dispatch({ type: "UPDATE_GRID", row: 1, col: i, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
            else if(grid[0][i] === "" && grid[1][i] === symbolToCheck && grid[2][i] === symbolToCheck) {
              dispatch({ type: "UPDATE_GRID", row: 0, col: i, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return true; 
            }
          }
    
          //Diagonals Left top to bottom right [0,0] => [2,2]
          if(grid[0][0] === symbolToCheck && grid[1][1] === symbolToCheck && grid[2][2] === "") {
            dispatch({ type: "UPDATE_GRID", row: 2, col: 2, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true;
          }
          else if(grid[0][0] === symbolToCheck && grid[1][1] === "" && grid[2][2] === symbolToCheck) {
            dispatch({ type: "UPDATE_GRID", row: 1, col: 1, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true;
          }
          else if(grid[0][0] === "" && grid[1][1] === symbolToCheck && grid[2][2] === symbolToCheck) {
            dispatch({ type: "UPDATE_GRID", row: 0, col: 0, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true;
          }
    
          //Diagonals Right top to bottom Left [0,2] => [2,0]
          if(grid[0][2] === symbolToCheck && grid[1][1] === symbolToCheck && grid[2][0] === "") {
            dispatch({ type: "UPDATE_GRID", row: 2, col: 0, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true;
          }
          else if(grid[0][2] === symbolToCheck && grid[1][1] === "" && grid[2][0] === symbolToCheck) {
            dispatch({ type: "UPDATE_GRID", row: 1, col: 1, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true;
          }
          else if(grid[0][2] === "" && grid[1][1] === symbolToCheck && grid[2][0] === symbolToCheck) {
            dispatch({ type: "UPDATE_GRID", row: 0, col: 2, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return true; 
          }
        }
        else {
          //Pick a random location based on priority 
    
          //Middle first
          if(grid[1][1] === "") {
            dispatch({ type: "UPDATE_GRID", row: 1, col: 1, whosTurn: symbolToWrite });
            dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
            return;
          }
          //Pick Corners. 
          if(grid[0][0] === "" || grid[0][2] === "" || grid[2][0] === "" || grid[2][2] === "") {
            if(grid[0][0] === "") {
              dispatch({ type: "UPDATE_GRID", row: 0, col: 0, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[0][2] === "") {
              dispatch({ type: "UPDATE_GRID", row: 0, col: 2, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[2][0] === "") {
              dispatch({ type: "UPDATE_GRID", row: 2, col: 0, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[2][2] === "") {
              dispatch({ type: "UPDATE_GRID", row: 2, col: 2, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
          } 
          //Pick Sides 
          if(grid[1][0] === "" || grid[0][1] === "" || grid[2][1] === "" || grid[1][2] === "") {
            if(grid[1][0] === "") {
              dispatch({ type: "UPDATE_GRID", row: 1, col: 0, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[0][1] === "") {
              dispatch({ type: "UPDATE_GRID", row: 0, col: 1, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[2][1] === "" ) {
              dispatch({ type: "UPDATE_GRID", row: 2, col: 1, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
            else if(grid[1][2] === "") {
              dispatch({ type: "UPDATE_GRID", row: 1, col: 2, whosTurn: symbolToWrite });
              dispatch({ type: "CHANGE_TURN", whosTurn: symbolToWrite === "x" ? "o" : "x" });
              return;
            }
          }
        }
      },[grid, dispatch]),
  };
};

export default useHelperFunctions;
