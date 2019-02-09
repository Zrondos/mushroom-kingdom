import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./Components/nav_bar";
import { ProfilesContainer } from "./Components/ProfilesContainer.jsx";
// import ProfilePages

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProfilesContainer />
      </div>
    );
  }
}

export default App;
