import React from 'react';
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
    
    return (
         <Router className="wrapper">
            <Header />
            <Switch className="main">
                <Route path="/play">
                    <Play />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));