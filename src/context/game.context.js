import { createContext, useReducer } from "react";
import reducer from "../reducers/game.reducer";

export const DispatchContext = createContext();
export const GameContext = createContext();

const defaultValues = {
  players: { player1: "", player2: "" },
  grid: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  stats: { x: 0, o: 0, tie: 0 },
  winner: "",
  modal: "",
  winSet: {},
  whosTurn: "x",
};

export function GameProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultValues);
  return (
    <GameContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </GameContext.Provider>
  );
}
