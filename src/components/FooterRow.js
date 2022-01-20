import React, { memo } from "react";
import GameStatRow from "../styles/FooterRowStyles";

const FooterRow = ({ stats, p2, p1 }) => {
  return (
    <GameStatRow>
      <div className="x-stats">
        {p2.type === "Person" && (
          <p>{`X (${p1.mark === "x" ? "P1" : "P2"})`}</p>
        )}
        {p2.type === "CPU" && <p>{`X (${p1.mark === "x" ? "YOU" : "CPU"})`}</p>}
        <p className="score">{stats.x}</p>
      </div>
      <div className="tie-stats">
        <p>Ties</p>
        <p className="score">{stats.tie}</p>
      </div>
      <div className="o-stats">
        {p2.type === "Person" && (
          <p>{`O (${p1.mark === "o" ? "P1" : "P2"})`}</p>
        )}
        {p2.type === "CPU" && <p>{`O (${p1.mark === "o" ? "YOU" : "CPU"})`}</p>}
        <p className="score">{stats.o}</p>
      </div>
    </GameStatRow>
  );
};

export default memo(FooterRow);
