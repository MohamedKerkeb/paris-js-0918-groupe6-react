import React, { Component } from "react";
import "./App.css";
import StudentCreateAccount from "./components/StudentCreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentCreateAccount />
      </div>
    );
  }
}

export default App;
