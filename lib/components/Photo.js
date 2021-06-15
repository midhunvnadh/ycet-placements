import React from "react";

export default class Photo extends React.Component {
  render() {
    return (
      <div className="photo-holder">
        <div className="photo">
          <img src={this.props.photoURL} />
        </div>
        <label>{this.props.name}</label>
      </div>
    );
  }
}
