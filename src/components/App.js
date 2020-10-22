import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Play from "./Play";
import Footer from "./Footer";
import '../css/App.scss';

function App() {

    const [myPick, setMyPick] = useState("");
    const [housePick, setHousePick] = useState("");

    useEffect(() => {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = choices[Math.floor((Math.random()*3))];
        setHousePick(randomChoice);
    },[myPick, setHousePick])
    
    return (
         <Router className="wrapper">
            <Header />
            <Switch className="main">
                <Route path="/play">
                    <Play mine={myPick} house={housePick} />
                </Route>
                <Route path="/">
                    <Home setPick={setMyPick}/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));