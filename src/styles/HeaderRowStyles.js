import styled from "styled-components";

const GameHeaderRow = styled.div`
  height: 70px;
  display: flex;
  align-items: stretch;
  margin-bottom: 30px; 
  /* Small Devices Cell Phone Screens */
  @media screen and (max-width: 767px) {
    height: 40px; 
    margin-top: 20px; 
    margin-bottom: 60px;
  }
  .icon-group {
    display: flex; 
    margin-right: 120px; 
    img {
      margin: 0 5px; 
    }
    /* Large devices Tablet Screens */
    @media screen and (min-width: 768px) and (max-width: 1199.98px) {
      margin-right: 50px; 
      img {
        width: 50px; 
        height: 50px; 
      }
      align-items: center; 
    }
    /* Small Devices Cell Phone Screens */
    @media screen and (max-width: 767px) {
      margin-right: 40px; 
      img {
        width: 35px; 
        height: 35px; 
      }
      align-items: center; 
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
    /* Large devices (desktops, less than 1200px) Tablet Screens */
    @media screen and (min-width: 768px) and (max-width: 1199.98px) {
      margin-right: 100px;  
      width: 150px;
    }
    /* Small Devices Cell Phone Screens */
    @media screen and (max-width: 767px) {
      margin-right: 90px;  
      width: 110px;
    }
    .mask {
      width: 55px; 
      height: 55px; 
      background-color: #A8BFC9; 
      -webkit-mask-image: ${(props) => `url(${props.imgUrl})`};
      mask-image: ${(props) => `url(${props.imgUrl})`};
      mask-size: 30px 30px;
      mask-repeat: no-repeat; 
      mask-position: center; 
      /* Small Devices Cell Phone Screens */
      @media screen and (max-width: 767px) {
        width: 35px; 
        height: 35px;  
        mask-size: 25px 25px;
      }
    }
    p {
      margin-left: 0px; 
      font-weight: 700; 
      font-size: 26px;  
      letter-spacing: 1.5px; 
      /* Small Devices Cell Phone Screens */
      @media screen and (max-width: 767px) {
        font-size: 20px;  
      }
    }
  }
  .restart-btn {
    background-color: #A8BFC9;
    padding: 0 30px; 
    border-radius: 5px; 
    border: none; 
    color: #1a2a33; 
    box-shadow: 0px 5px 0px 0px #83969e;
    /* Large devices (desktops, less than 1200px) Tablet Screens */
    @media screen and (min-width: 768px) and (max-width: 1199.98px) {
      padding: 0px 25px; 
    }
    /* Small Devices Cell Phone Screens */
    @media screen and (max-width: 767px) {
      padding: 0px 10px; 
    }
    img {
      width: 30px; 
      height: 30px; 
      /* Large devices (desktops, less than 1200px) Tablet Screens */
      @media screen and (min-width: 768px) and (max-width: 1199.98px) {
        width: 22px; 
        height: 22px; 
      }
      /* Small Devices Cell Phone Screens */
      @media screen and (max-width: 767px) {
        width: 18px; 
        height: 18px;  
      }
    }
    &:hover {
      background-color: #dbe8ed;
    }
  }
}
`;

export default GameHeaderRow; 