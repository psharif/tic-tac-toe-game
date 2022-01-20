import styled from "styled-components";

const GameStatRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  p {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  .score {
    margin-top: 5px;
    font-weight: 700;
    font-size: 24px;
  }
  .x-stats,
  .tie-stats,
  .o-stats {
    height: 100px;
    width: 250px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Large devices (desktops, less than 1200px) Tablet Screens */
    @media screen and (min-width: 768px) and (max-width: 1199.98px) {
      width: 150px; 
      height: 80px; 
    }
    /* Small Devices Cell Phone Screens */
    @media screen and (max-width: 767px) {
      width: 110px; 
      height: 80px; 
    }
  }
  .x-stats {
    background-color: #31c3bd;
    box-shadow: 0px 5px 0px 0px #27a09c;
    &:hover {
      background-color: #65e9e4;
    }
  }
  .tie-stats {
    background-color: #a8bfc9;
    box-shadow: 0px 5px 0px 0px #83959c;
    &:hover {
      background-color: #dbe8ed;
    }
  }
  .o-stats {
    background-color: #f2b137;
    box-shadow: 0px 5px 0px 0px #c7912c;
    &:hover {
      background-color: #ffc860;
    }
  }
`;

export default GameStatRow;