import React, { Component } from "react";
import CarsContext from "../context/CarsContext";

export default class CarsProvider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        car001: { name: "Honda", price: 100 },
        car002: { name: "BMW", price: 300 },
        car003: { name: "Mercedes", price: 500 },
      },
    };
  }

  render() {
    return (
      <CarsContext.Provider
        value={{
          cars: this.state.cars,
          incrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars,
            });
          },
          decrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars,
            });
          },
        }}
      >
        {this.props.children}
      </CarsContext.Provider>
    );
  }
}
