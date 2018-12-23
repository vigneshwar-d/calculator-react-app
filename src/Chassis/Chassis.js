import React, { Component } from "react";
import DisplayUnit from "./DisplayUnit/DisplayUnit";
import Operators from "./Operators/Operators";
import Operands from "./Operands/Operands";

class Chassis extends Component {
  render() {
    return (
      <div>
        <DisplayUnit />
        <br />
        <Operands />
        <br />
        <Operators />
        <br />
      </div>
    );
  }
}

export default Chassis;
