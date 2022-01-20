import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a2a33;
  .content {
    font-family: "Outfit", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export default GameContainer;