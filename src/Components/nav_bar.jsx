import React from "react";
import { Pipe } from "./pipe_elements";
import mario_jump from "./images/mario_jump.png";
import luigi_jump from "./images/luigi_jump.png";
import peach_jump from "./images/peach_jump.png";
import yoshi_jump from "./images/yoshi_jump.png";
import warp_pipe from "./images/warp_pipe.png";

import luigi_sound from "./audio/luigi_sound.wav";
import peach_sound from "./audio/peach_sound.wav";
import yoshi_sound from "./audio/yoshi_sound.wav";

export class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="title-container-small">
          <h2 className="title-small">
            The
            <br />
            Mushroom
            <br />
            Kingdom
          </h2>
        </div>
        <div className="nav-bar">
          <Pipe
            character={this.props.characters.mario}
            photo={mario_jump}
            pipe={warp_pipe}
            sound={yoshi_sound}
            d
            characterSelect={this.props.characterSelect}
          />
          <Pipe
            character={this.props.characters.luigi}
            photo={luigi_jump}
            pipe={warp_pipe}
            sound={luigi_sound}
            characterSelect={this.props.characterSelect}
          />
          <div className="title-container-large">
            <h2 className="title-large">
              The
              <br />
              Mushroom
              <br />
              Kingdom
            </h2>
          </div>
          <Pipe
            character={this.props.characters.peach}
            photo={peach_jump}
            pipe={warp_pipe}
            sound={peach_sound}
            characterSelect={this.props.characterSelect}
          />
          <Pipe
            character={this.props.characters.yoshi}
            photo={yoshi_jump}
            pipe={warp_pipe}
            sound={yoshi_sound}
            characterSelect={this.props.characterSelect}
          />
        </div>
      </div>
    );
  }
}
