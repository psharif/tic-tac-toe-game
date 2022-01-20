import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1a2a33;
  .pageSlider-enter {
    transform: translateX(-100%);
  }
  .pageSlider-enter.pageSlider-enter-active {
    transform: translateX(0);
    transition: all 600ms;
  }
  .pageSlider-exit {
    transform: translateX(0);
  }

  .pageSlider-exit.pageSlider-exit-active {
    transform: transform: translateX(-100%);
    transition: all 600ms;
  }
`;

export default Container;