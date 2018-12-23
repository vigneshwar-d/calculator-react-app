import React from "react";

import styles from "./Operands.css";

const operandNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const operands = props => {
  return (
    <div className={styles.Operands}>
      <button>{operandNumbers[parseInt(props.numbers)]}</button>
    </div>
  );
};

export default operands;
