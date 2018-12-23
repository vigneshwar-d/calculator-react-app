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
        <br />
        <Operands numbers="3" />
        <Operands numbers="4" />
        <Operands numbers="5" />
        <br />
        <Operands numbers="6" />
        <Operands numbers="7" />
        <Operands numbers="8" />
        <br />
      </div>
    );
  }
}

export default Chassis;
