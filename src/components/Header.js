import React from "react";
import Scorebox from "./Scorebox";

function Header() {
    return (
        <header>
            <h1 className="header__title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <Scorebox />
        </header>
    )
}

export default Header;