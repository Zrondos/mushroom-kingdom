import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./Components/nav_bar";
import { Profile } from "./Components/Profile.jsx";
import mario_profile from "./Components/images/mario_profile.png";
import luigi_profile from "./Components/images/luigi_profile.png";
import peach_profile from "./Components/images/peach_profile.png";
import yoshi_profile from "./Components/images/yoshi_profile.png";
// import ProfilePages

const characters = {
  mario: { name: "mario", greeting: "It's a me!", photo: mario_profile },
  luigi: { name: "luigi", greeting: "Luigi time!", photo: luigi_profile },
  peach: {
    name: "peach",
    greeting: "I'm Peach! Let's go!",
    photo: peach_profile
  },
  yoshi: { name: "yoshi", greeting: "Yoshi!", photo: yoshi_profile }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { character: characters.mario };
    this.characterSelect = this.characterSelect.bind(this);
  }

  characterSelect(newCharacter) {
    this.setState({ character: newCharacter });
  }

  render() {
    return (
      <div>
        <NavBar
          // characters={characters}
          characterSelect={this.characterSelect}
          characters={characters}
        />
        <Profile character={this.state.character} />
      </div>
    );
  }
}

export default App;
