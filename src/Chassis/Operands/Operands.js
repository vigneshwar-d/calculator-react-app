import React from "react";

import styles from "./Operands.css";

const operandNumbers = [
  "7",
  "8",
  "9",
  "AC",
  "4",
  "5",
  "6",
  "0",
  "1",
  "2",
  "3",
  "="
];

const operands = props => {
  return (
    <div className={styles.Operands}>
      <button>{operandNumbers[parseInt(props.numbers)]}</button>
    </div>
  );
};

export default operands;
