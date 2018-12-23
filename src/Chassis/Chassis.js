import React, { Component } from "react";
import DisplayUnit from "./DisplayUnit/DisplayUnit";
import Operators from "./Operators/Operators";
import Operands from "./Operands/Operands";

import styles from "./Chassis.css";

class Chassis extends Component {
  render() {
    return (
      <div className={styles.Chassis}>
        <DisplayUnit />
        <br />
        <Operators symbol="0" />
        <Operators symbol="1" />
        <Operators symbol="2" />
        <Operators symbol="3" />
        <br />
        <Operands numbers="0" />
        <Operands numbers="1" />
        <Operands numbers="2" />
        <Operands numbers="3" />
        <br />
        <Operands numbers="4" />
        <Operands numbers="5" />
        <Operands numbers="6" />
        <Operands numbers="7" />
        <br />
        <Operands numbers="8" />
        <Operands numbers="9" />
        <Operands numbers="10" />
        <Operands numbers="11" />
        <br />
        <span className={styles.BottomText}>calculator</span>
      </div>
    );
  }
}

export default Chassis;
