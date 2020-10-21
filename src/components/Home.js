import React from "react";
import { Link } from "react-router-dom";
import bgTriangle from '../images/bg-triangle.svg';
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";

function Home() {

    return (
        <div className="home">
            <img className="triangle" src={bgTriangle}/>
            <Link to="/play">
                <div className="home__item home__paper" style={{backgroundImage: `url(${paperIcon})`}} onClick={()=>(console.log("Paper clicked"))} />
            </Link>
            <Link to="/play">
                <div className="home__item home__scissors" style={{backgroundImage: `url(${scissorsIcon})`}} onClick={()=>(console.log("Scissors clicked"))}/>
            </Link>
            <Link to="/play">
                <div className="home__item home__rock" style={{backgroundImage: `url(${rockIcon})`}} onClick={()=>(console.log("Rock clicked"))}/>
            </Link>
        </div>
    )
}

export default Home;