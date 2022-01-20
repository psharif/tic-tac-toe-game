const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TURN":
      return {
        ...state,
        whosTurn: action.whosTurn,
      };
    case "UPDATE_GRID":
      return {
        ...state,
        grid: state.grid.map((row, rowIdx) =>
          rowIdx === action.row
            ? row.map((cell, colIdx) =>
                colIdx === action.col ? action.whosTurn : cell
              )
            : row
        ),
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modal: action.modalType,
      };
    case "UPDATE_STATS":
      return {
        ...state,
        stats: {
          ...state.stats,
          [action.winner]: state.stats[action.winner] + 1,
        },
      };
    case "SET_WINNER":
      return {
        ...state,
        winner: action.winner,
      };
    case "UPDATE_WIN_SET":
      return {
        ...state,
        winSet: action.winSet,
      };
    case "SET_PLAYER_TYPES":
      return {
        ...state,
        players: {
          player1: { ...state.players.player1, type: action.p1Type },
          player2: { ...state.players.player2, type: action.p2Type },
        },
      };
    case "SET_PLAYER_MARKS":
      return {
        ...state,
        players: {
          player1: { ...state.players.player1, mark: action.p1Mark },
          player2: { ...state.players.player2, mark: action.p2Mark },
        },
      };
    case "RESET_GAME":
      return {
        ...state,
        players: { player1: "", player2: "" },
        grid: state.grid.map((row) => row.map((cell) => "")),
        stats: { x: 0, o: 0, tie: 0 },
        winner: "",
        modal: "",
        winSet: {},
        whosTurn: "x",
      };
    case "RESET_GRID":
      return {
        ...state,
        grid: state.grid.map((row) => row.map((cell) => "")),
      };
    default:
      return state;
  }
};

export default reducer;
