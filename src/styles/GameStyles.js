import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a2a33;
  mask-size: 30px 30px;
  /* Small Devices Cell Phone Screens */
  @media screen and (max-width: 767px) {
    justify-content: flex-start; 
  }
  .content {
    font-family: "Outfit", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export default GameContainer;