import React, { Component } from "react";
import ToDoApp from "./ToDoApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{textAlign: "center", margin: "10%"}}>
        <ToDoApp />
      </div>
    );
  }
}

export default App;
