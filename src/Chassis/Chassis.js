import React, { Component } from "react";
import DisplayUnit from "./DisplayUnit/DisplayUnit";
import Operators from "./Operators/Operators";
import Operands from "./Operands/Operands";

import styles from "./Chassis.css";

let expressionToSolve = "";
let expressionOnDisplay = "";
class Chassis extends Component {
  state = {
    textOnDisplayUnit: "",
    expressionToSolve: ""
  };

  operatorPressed = symbol => {
    expressionOnDisplay = "";
    expressionToSolve = expressionToSolve + symbol;
    this.setStuffsToState();
  };

  operandPressed = number => {
    if (number !== "AC") {
      expressionOnDisplay = expressionOnDisplay + number;
      expressionToSolve = expressionToSolve + number;
      this.setStuffsToState();
    }

    if (number === "AC") {
      expressionToSolve = "";
      expressionOnDisplay = "";
      this.setStuffsToState();
    }

    if (number === "=") {
      var equation = this.state.expressionToSolve;
      const answer = eval(equation);
      this.setState({ textOnDisplayUnit: answer });
    }
  };

  setStuffsToState = () => {
    this.setState({
      textOnDisplayUnit: expressionOnDisplay,
      expressionToSolve: expressionToSolve
    });
    // console.log("On Display: " + this.state.textOnDisplayUnit);
    // console.log("Expression: " + this.state.expressionToSolve);
  };
  render() {
    return (
      <div className={styles.Chassis}>
        <DisplayUnit content={this.state.textOnDisplayUnit} />
        <br />
        <Operators symbol="0" clicked={this.operatorPressed} />
        <Operators symbol="1" clicked={this.operatorPressed} />
        <Operators symbol="2" clicked={this.operatorPressed} />
        <Operators symbol="3" clicked={this.operatorPressed} />
        <br />
        <Operands numbers="0" clicked={this.operandPressed} />
        <Operands numbers="1" clicked={this.operandPressed} />
        <Operands numbers="2" clicked={this.operandPressed} />
        <Operands numbers="3" clicked={this.operandPressed} />
        <br />
        <Operands numbers="4" clicked={this.operandPressed} />
        <Operands numbers="5" clicked={this.operandPressed} />
        <Operands numbers="6" clicked={this.operandPressed} />
        <Operands numbers="7" clicked={this.operandPressed} />
        <br />
        <Operands numbers="8" clicked={this.operandPressed} />
        <Operands numbers="9" clicked={this.operandPressed} />
        <Operands numbers="10" clicked={this.operandPressed} />
        {/* //Since = sign is an operand... */}
        <Operands numbers="11" clicked={this.operandPressed} />
        <br />
        <span className={styles.BottomText}>calculator</span>
      </div>
    );
  }
}

export default Chassis;
