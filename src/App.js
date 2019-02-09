import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./Components/nav_bar";
import { Pipe } from "./Components/pipe_elements";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2> Hello world </h2>
      </div>
    );
  }
}

export default App;
