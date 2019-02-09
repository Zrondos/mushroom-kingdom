import React from "react";

export class Pipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected_character: "none" };
  }

  select_character(character) {
    document
      .getElementsByClassName("mario-in-pipe")[0]
      .classList.remove("clicked");
    document.getElementsByClassName(
      "mario-profile-container"
    )[0].style.display = "none";

    document
      .getElementsByClassName("luigi-in-pipe")[0]
      .classList.remove("clicked");
    document.getElementsByClassName(
      "luigi-profile-container"
    )[0].style.display = "none";

    document
      .getElementsByClassName("peach-in-pipe")[0]
      .classList.remove("clicked");
    document.getElementsByClassName(
      "peach-profile-container"
    )[0].style.display = "none";

    document
      .getElementsByClassName("yoshi-in-pipe")[0]
      .classList.remove("clicked");
    document.getElementsByClassName(
      "yoshi-profile-container"
    )[0].style.display = "none";

    document
      .getElementsByClassName(`${character}-in-pipe`)[0]
      .classList.add("clicked");
    document.getElementsByClassName(
      `${character}-profile-container`
    )[0].style.display = "block";
  }

  render() {
    return (
      <div
        className="pipe-container"
        id={`${this.props.character}-pipe-container`}
      >
        <img
          src={this.props.photo}
          alt={this.props.character}
          // id={`${this.props.character}-in-pipe`}
          className={
            this.state.selected_character === this.props.character
              ? `${this.props.character}-in-pipe clicked`
              : `${this.props.character}-in-pipe`
          }
        />
        <img
          src={this.props.pipe}
          alt="pipe"
          className={`${this.props.character}-warp-pipe`}
          onClick={() => this.select_character(this.props.character)}
        />
      </div>
    );
  }
}
