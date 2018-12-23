import React, { Component } from "react";
import Chassis from "./Chassis/Chassis";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Chassis />
      </div>
    );
  }
}

export default App;
