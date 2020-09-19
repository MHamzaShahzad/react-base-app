import React, { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import Main from "./components/MainWithClass";
//import Main from "./components/MainWithFunction";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
