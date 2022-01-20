import styled, { css } from "styled-components";

const GameMenu = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;
  background-color: #1a2a33;
  .content {
    display: flex;
    width: 35%;
    flex-direction: column;
    align-items: center;
    .icon-row {
      display: flex;
      margin-bottom: 50px;
      img {
        width: 50px;
        height: 50px;
        margin: 0px 5px;
      }
    }
    .player-choice-container {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: #1f3641;
      box-shadow: 0px 12px 0px 0px #0f161d;
      border-radius: 20px;
      width: 100%;
      margin-bottom: 70px;
      h1 {
        font-weight: 700;
        text-transform: uppercase;
        color: #a8bfc9;
        font-size: 26px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }
      p {
        font-size: 20px;
        font-weight: 500;
        color: rgba(168, 191, 201, 0.5);
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }
      .button-row {
        display: flex;
        border-radius: 20px;
        padding: 15px;
        background-color: #1a2a33;
        width: calc(100% - 20px);
        margin-bottom: 20px;
      }
    }
    .cpu-new-btn,
    .player-new-btn {
      width: 100%;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: "Outfit", sans-serif;
      color: #1a2a33;
      border-radius: 20px;
      border: none;
      padding: 20px 0px;
      margin-bottom: 40px;
    }
    .cpu-new-btn {
      background-color: #f2b137;
      box-shadow: 0px 10px 0px 0px #c7912c;
    }
    .player-new-btn {
      background-color: #31c3bd;
      box-shadow: 0px 10px 0px 0px #27a09c;
    }
  }
`;

const MarkButton = styled.button`
  ${(props) => {
    switch (props.selected) {
      case true:
        return css`
          color: #1a2a33;
          background-color: #a8bfc9;
          padding: 15px 0px;
          border-radius: 15px;
          border: none;
          width: 100%;
          display: flex;
          justify-content: center;
          .mask {
            width: 60px;
            height: 60px;
            background-color: #1a2a33;
            -webkit-mask-image: ${(props) =>
              props.mark === "x"
                ? `url("../assets/icon-x.svg")`
                : `url("../assets/icon-o.svg")`};
            mask-image: ${(props) =>
              props.mark === "x"
                ? `url("../assets/icon-x.svg")`
                : `url("../assets/icon-o.svg")`};
            mask-size: 50px 50px;
            mask-repeat: no-repeat;
            mask-position: center;
          }
        `;
      default:
        return css`
          background-color: transparent;
          border: none;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .mask {
            width: 60px;
            height: 60px;
            background-color: #a8bfc9;
            -webkit-mask-image: ${(props) =>
              props.mark === "x"
                ? `url("../assets/icon-x.svg")`
                : `url("../assets/icon-o.svg")`};
            mask-image: ${(props) =>
              props.mark === "x"
                ? `url("../assets/icon-x.svg")`
                : `url("../assets/icon-o.svg")`};
            mask-size: 50px 50px;
            mask-repeat: no-repeat;
            mask-position: center;
          }
        `;
    }
  }}
`;

export {MarkButton, GameMenu};