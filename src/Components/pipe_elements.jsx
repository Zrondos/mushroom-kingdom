import React from "react";

export class Pipe extends React.Component {
  constructor(props) {
    super(props);
    this.select_character = this.select_character.bind(this);
  }

  select_character(character) {
    document
      .getElementsByClassName("mario-in-pipe")[0]
      .classList.remove("clicked");

    document
      .getElementsByClassName("luigi-in-pipe")[0]
      .classList.remove("clicked");

    document
      .getElementsByClassName("peach-in-pipe")[0]
      .classList.remove("clicked");

    document
      .getElementsByClassName("yoshi-in-pipe")[0]
      .classList.remove("clicked");

    document
      .getElementsByClassName(`${character.name}-in-pipe`)[0]
      .classList.add("clicked");

    this.props.characterSelect(character);
    let audio = new Audio(this.props.sound);
    audio.play();
  }

  render() {
    return (
      <div
        className="pipe-container"
        id={`${this.props.character.name}-pipe-container`}
      >
        <img
          src={this.props.photo}
          alt={this.props.character.name}
          className={
            this.selected_character === this.props.character.name
              ? `${this.props.character.name}-in-pipe clicked`
              : `${this.props.character.name}-in-pipe`
          }
        />
        <img
          src={this.props.pipe}
          alt="pipe"
          className={`${this.props.character.name}-warp-pipe`}
          onClick={() => this.select_character(this.props.character)}
        />
      </div>
    );
  }
}
