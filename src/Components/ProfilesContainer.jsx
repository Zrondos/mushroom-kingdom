import React from "react";
import { Profile } from "./Profile.jsx";

export class ProfilesContainer extends React.Component {
  render() {
    return (
      <div className="profiles-container">
        <Profile name="mario" />
        <Profile name="luigi" />
        <Profile name="peach" />
        <Profile name="yoshi" />
      </div>
    );
  }
}
