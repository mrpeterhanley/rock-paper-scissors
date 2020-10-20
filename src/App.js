import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    
    return (
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));