import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import Main from "./components/MainWithClass";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>

    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Me
        </a>
      </header>
    </div> */
  );
}

export default App;
