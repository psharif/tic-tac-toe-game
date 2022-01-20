import styled from "styled-components";

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

const TileDiv = styled.div`
  width: 250px;
  height: 220px;
  /* Large devices (desktops, less than 1200px) Tablet Screens */
  @media screen and (min-width: 768px) and (max-width: 1199.98px) {
    width: 150px; 
    height: 150px; 
  }
  /* Small Devices Cell Phone Screens */
  @media screen and (max-width: 767px) {
    width: 110px; 
    height: 110px; 
  }
  background-color: ${(props) => {
    if (props.winningTile && props.winner === "x") return "#31c3bd";
    else if (props.winningTile && props.winner === "o") return "#f2b137";
    else return "#1f3641";
  }};
  border: none;
  border-radius: 15px;
  box-shadow: 0px 10px 0px 0px #090d11;
  display: flex;
  align-items: center;
  justify-content: center;
  .mask-o,
  .mask-x {
    display: block;
    width: 120px;
    height: 120px;
    background-color: transparent;
    mask-size: 100px 100px;
    mask-repeat: no-repeat;
    mask-position: center;
    /* Large devices (desktops, less than 1200px) Tablet Screens */
    @media screen and (min-width: 768px) and (max-width: 1199.98px) {
      width: 80px; 
      height: 80px; 
      mask-size: 70px 70px; 
    }
    /* Small Devices Cell Phone Screens */
    @media screen and (max-width: 767px) {
      width: 60px;
      height: 60px;
      mask-size: 50px 50px; 
    }
  }
  .mask-o {
    &:hover {
      background-color: #f2b137;
      -webkit-mask-image: url("../assets/icon-o-outline.svg");
      mask-image: url("../assets/icon-o-outline.svg");
    }
    &.selected {
      background-color: ${(props) =>
        props.winningTile ? "#1f3641" : "#f2b137"};
      -webkit-mask-image: url("../assets/icon-o.svg");
      mask-image: url("../assets/icon-o.svg");
    }
  }
  .mask-x {
    &:hover {
      background-color: #31c3bd;
      -webkit-mask-image: url("../assets/icon-x-outline.svg");
      mask-image: url("../assets/icon-x-outline.svg");
    }
    &.selected {
      background-color: ${(props) =>
        props.winningTile ? "#1f3641" : "#31c3bd"};
      -webkit-mask-image: url("../assets/icon-x.svg");
      mask-image: url("../assets/icon-x.svg");
    }
  }
`;

export {TileDiv, GameBoard};