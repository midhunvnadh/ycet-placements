import React from "react";
import { FaCamera } from "react-icons/fa";
const imageGen = require("dom-to-image");

export default class Snapper extends React.Component {
  getPng() {
    var node = document.getElementById("card");
    imageGen
      .toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "filename.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
  render() {
    return (
      <div className="box force-center">
        <button className="button is-link" onClick={() => this.getPng()}>
          <span className="icon">
            <FaCamera />
          </span>
          <span>Snap</span>
        </button>
      </div>
    );
  }
}
