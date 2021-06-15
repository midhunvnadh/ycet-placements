import React from "react";

export default class Photo extends React.Component {
  render() {
    return (
      <div className="photo-holder">
        <div className="photo"></div>
        <label>Name</label>
      </div>
    );
  }
}
