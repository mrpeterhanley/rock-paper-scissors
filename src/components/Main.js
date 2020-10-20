import React from "react";
import bgTriangle from '../images/bg-triangle.svg';
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";

function Main() {

    return (
        <div className="main" style={{backgroundImage: `url(${bgTriangle})`}}>
            <div className="main__item paper" style={{backgroundImage: `url(${paperIcon})`}}></div>
            <div className="main__item scissors" style={{backgroundImage: `url(${scissorsIcon})`}}></div>
            <div className="main__item rock" style={{backgroundImage: `url(${rockIcon})`}}></div>
        </div>
    )
}

export default Main;