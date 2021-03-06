import React from "react";

import styles from "./Operators.css";

const operatorsSymbols = ["+", "-", "/", "*"];

const operators = props => {
  return (
    <div className={styles.Operators}>
      <button
        onClick={() => props.clicked(operatorsSymbols[parseInt(props.symbol)])}
      >
        {operatorsSymbols[parseInt(props.symbol)]}
      </button>
    </div>
  );
};

export default operators;
