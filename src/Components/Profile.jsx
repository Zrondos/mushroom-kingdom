import React from "react";

export class Profile extends React.Component {
  render() {
    return (
      <div className={`${this.props.name}-profile-container`}>
        <h2>My name is {this.props.name}</h2>
      </div>
    );
  }
}
