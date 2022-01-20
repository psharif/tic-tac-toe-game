
import styled from "styled-components";

const GameModal = styled.div`
    display: ${(props) => (props.modal !== "" ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0, 0.4);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .modal-content {
        padding: 50px 0px;
        display: flex;
        width: 100%;
        background-color: #1f3641;
        align-items: center;
        flex-direction: column;
        text-align: center;
        text-transform: uppercase;
        box-sizing: border-box;
        opacity: 1;
        p {
            color: #a8bfc9;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            margin-top: 0px;
            /* Small Devices Cell Phone Screens */
            @media screen and (max-width: 767px) {
                font-size: 16px;
            }
        }
        .main-text {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 800px;
            /* Small Devices Cell Phone Screens */
            @media screen and (max-width: 767px) {
                width: 400px;
            }
            .mask-o,
            .mask-x {
                display: block;
                width: 80px;
                height: 80px;
                background-color: transparent;
                mask-size: 70px 70px;
                mask-repeat: no-repeat;
                mask-position: center;
                /* Small Devices Cell Phone Screens */
                @media screen and (max-width: 767px) {
                    width: 40px;
                    height: 40px;
                    mask-size: 30px 30px;
                }
            }
            .mask-o {
                background-color: #f2b137;
                -webkit-mask-image: url("../assets/icon-o.svg");
                mask-image: url("../assets/icon-o.svg");
            }
            .mask-x {
                background-color: #31c3bd;
                -webkit-mask-image: url("../assets/icon-x.svg");
                mask-image: url("../assets/icon-x.svg");
            }
            h1 {
                margin-left: 30px;
                font-size: 60px;
                color: ${(props) => {
                    if (props.winner === "x") return "#31c3bd";
                    if (props.winner === "o") return "#f2b137";
                    if (props.winner === "tie" || props.winner === "") return "#a8bfc9";
                }};
                margin-top: 20px;
                letter-spacing: 2px;
                /* Small Devices Cell Phone Screens */
                @media screen and (max-width: 767px) {
                    margin-left: 10px;
                    font-size: 28px;
                }
            }
        }
        .button-row {
            display: flex;
            .grey-btn,
            .yellow-btn {
                padding: 15px 30px;
                border: none;
                border-radius: 10px;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 18px;
                margin: 0px 10px;
                /* Small Devices Cell Phone Screens */
                @media screen and (max-width: 767px) {
                    padding: 10px 25px;
                    font-size: 16px;
                }
            }
            .grey-btn {
                background-color: #a8bfc9;
                box-shadow: 0px 5px 0px 0px #83959c;
                &:hover {
                    background-color: #dbe8ed;
                }
            }
            .yellow-btn {
                background-color: #f2b137;
                box-shadow: 0px 5px 0px 0px #c7912c;
                &:hover {
                    background-color: #ffc860;
                }
            }
        }
       &.hidden {
            opacity: 0;
            transition: opacity .5s ease-in-out;
       }
    }
`;

export default GameModal; 