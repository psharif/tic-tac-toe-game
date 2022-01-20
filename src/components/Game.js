import React, { useContext } from "react";
import { GameContext } from "../context/game.context";
import GameContainer from "../styles/GameStyles";
import HeaderRow from "./HeaderRow";
import Board from "./Board";
import FooterRow from "./FooterRow";
import Modal from "./Modal";

const Game = () => {
  /* Context */
  const gameState = useContext(GameContext);
  return (
    <>
      <GameContainer>
        <div className="content">
          <HeaderRow
            whosTurn={gameState.whosTurn}
            winTracker={gameState.winTracker}
          />
          <Board
            whosTurn={gameState.whosTurn}
            grid={gameState.grid}
            winner={gameState.winner}
            winSet={gameState.winSet}
            p2={gameState.players.player2}
          />
          <FooterRow
            stats={gameState.stats}
            p1={gameState.players.player1}
            p2={gameState.players.player2}
          />
        </div>
      </GameContainer>
      <Modal modal={gameState.modal} winner={gameState.winner} />
    </>
  );
};

export default Game;
