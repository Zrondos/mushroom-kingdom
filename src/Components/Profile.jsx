import React from "react";

export class Profile extends React.Component {
  render() {
    return (
      // <div className={`${this.props.character.name}-profile`}>
      //   {/* <h2>{this.props.onGreet}</h2> */}
      //   <h2>My name is {this.props.character.name}</h2>
      //   {/* <img src={this.props.photo} alt="profile pic" className="profile-pic" /> */}
      // </div>
      <div>
        <h1>{this.props.character.greeting}</h1>
        <h2>My name is {this.props.character.name}</h2>
        <img
          src={this.props.character.photo}
          alt="profile pic"
          className="profile-pic"
        />
      </div>
    );
  }
}
