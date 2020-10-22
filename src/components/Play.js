import React from "react";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";

function Play(props) {



    const myPick = props.mine;
    const housePick = props.house;

    console.log(housePick);

    function setMyPickIcon(pick) {
        if (pick === "rock") {
            return rockIcon;
        } else if (pick === "paper") {
            return paperIcon;
        } else if (pick === "scissors") {
            return scissorsIcon;
        }
    }

    function setMyPickClass(pick) {
        if (pick === "rock") {
            return "pick__rock";
        } else if (pick === "paper") {
            return "pick__paper";
        } else if (pick === "scissors") {
            return "pick__scissors";
        }
    }

    return (
        <div className="play-wrapper">
            <div className="pick">
                <div className="pick__title">You Picked {myPick}</div> 
                <div className={"pick__item " + setMyPickClass(myPick)} style={{backgroundImage: `url(${setMyPickIcon(myPick)}`}}></div>   
            </div>
            <div className="pick">
                <div className="pick__title">The House Picked {housePick}</div>
                <div className={"pick__item " + setMyPickClass(housePick)} style={{backgroundImage: `url(${setMyPickIcon(housePick)}`}}></div>
            </div>
        </div>
    )
}

export default Play;