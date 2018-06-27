import React, { Component } from "react";
import ToDoApp from "./ToDoApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop:"10%", padding: "2%", border: "3px dotted #7EC0EE", alignContent: "center" }}>
        <ToDoApp />
      </div>
    );
  }
}

export default App;
