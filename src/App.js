import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.scss';
import Header from "./components/Header";

function App() {
    
    return (
        <div className="wrapper">
            <Header />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));