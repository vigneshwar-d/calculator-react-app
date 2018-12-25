import React from "react";

import styles from "./DisplayUnit.css";

const displayUnit = props => {
  return (
    // <div>
    //   <p className={styles.DisplayUnit}>{props.content}</p>
    // </div>
    <div className={styles.DisplayUnit}>{props.content}</div>
  );
};

export default displayUnit;
