import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./Color";
import CarsProvider from "./CarsProvider";
import ProductList from "./ProductList";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {([theme]) => {
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
        }}
      </ThemeContext.Consumer>
    );
  }
}
