import styled from "styled-components";

const GameHeaderRow = styled.div`
  height: 70px;
  display: flex;
  align-items: stretch;
  margin-bottom: 30px; 
  .icon-group {
    display: flex; 
    margin-right: 120px; 
    img {
      margin: 0 5px; 
    }
  }
  .turn-prompt {
    width: 250px;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: #1f3641;
    color: #A8BFC9;
    border-radius: 10px; 
    box-shadow: 0px 5px 0px 0px #090d11;
    margin-right: 180px; 
    .mask {
      width: 55px; 
      height: 55px; 
      background-color: #A8BFC9; 
      -webkit-mask-image: ${(props) => `url(${props.imgUrl})`};
      mask-image: ${(props) => `url(${props.imgUrl})`};
      mask-size: 30px 30px;
      mask-repeat: no-repeat; 
      mask-position: center; 
    }
    p {
      margin-left: 0px; 
      font-weight: 700; 
      font-size: 26px;  
      letter-spacing: 1.5px; 
    }
  }
  .restart-btn {
    background-color: #A8BFC9;
    padding: 0 30px; 
    border-radius: 5px; 
    border: none; 
    color: #1a2a33; 
    box-shadow: 0px 5px 0px 0px #83969e;
    img {
      width: 30px; 
      height: 30px; 
    }
    &:hover {
      background-color: #dbe8ed;
    }
  }
}
`;

export default GameHeaderRow; 