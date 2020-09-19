import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./Color";
import CarsProvider from "./CarsProvider";
import ProductList from "./ProductList";

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <CarsProvider>
        <div className="App">
          <ProductList />
        </div>
      </CarsProvider>
    </main>
  );
};

export default Main;
