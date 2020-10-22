import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Play from "./Play";
import Footer from "./Footer";
import '../css/App.scss';

function App() {

    const [myPick, setMyPick] = useState("");
    const [housePick, setHousePick] = useState("");
    const [gameScore, setGameScore] = useState(0);

    useEffect(() => {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = choices[Math.floor((Math.random()*3))];
        setHousePick(randomChoice);
        console.log("Set new house pick: " + randomChoice);
    },[myPick, setMyPick, housePick, setHousePick]);

    return (
         <Router className="wrapper">
            <Header score={gameScore}/>
            <Switch className="main">
                <Route path="/play">
                    <Play mine={myPick} house={housePick} score={gameScore} setScore={setGameScore}/>
                </Route>
                <Route path="/">
                    <Home setPick={setMyPick} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));