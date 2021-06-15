import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCameraRetro,
} from "react-icons/fa";
import * as htmlToImage from "html-to-image";

export default class Snapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  getPng() {
    this.setState({ loading: true }, async () => {
      const dataUrl = await htmlToImage.toPng(document.getElementById("card"));
      var link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      link.click();
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div className="box">
        <div className="py-1">
          <h2 className="has-text-centered subtitle py-3">
            {this.props.status}
          </h2>
        </div>
        <div className="force-center">
          <button
            className="button is-white mx-1"
            disabled={this.props.displayLeft}
          >
            <FaArrowAltCircleLeft
              onClick={() => {
                this.props.changeIndex(-1);
              }}
            />
          </button>
          <button
            className={`button is-link is-large ${
              this.state.loading ? "is-loading" : ""
            }`}
            onClick={() => this.getPng()}
            disabled={this.state.loading}
          >
            <span className="icon">
              <FaCameraRetro />
            </span>
            <span>Snap</span>
          </button>
          <button
            className="button is-white mx-1"
            onClick={() => {
              this.props.changeIndex(+1);
            }}
            disabled={!this.props.displayRight}
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    );
  }
}
