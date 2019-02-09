import React from "react";

export class Pipe extends React.Component {
  render() {
    console.log(this.props.pic);
    return (
      <div
        className="pipe-container"
        id={`${this.props.character}-pipe-container`}
      >
        <img
          src={this.props.photo}
          alt={this.props.character}
          className={`${this.props.character}-in-pipe`}
        />
        <img
          src={this.props.pipe}
          alt="pipe"
          className={`${this.props.character}-warp-pipe`}
        />
      </div>
    );
  }
}
