import "./styles/css/App.css";

import Form from "./components/form";
import Nav from "./components/nav";
import React from "react";
import logo from "./img/badgeRGB.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="main">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="desc">Share a new Pin directly to {"Pinterest"}.</p>
                    <Form />
                </div>
            </header>
        </div>
    );
}

export default App;
