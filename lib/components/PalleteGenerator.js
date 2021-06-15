import React from "react";
import { FaDice, FaDiceD20 } from "react-icons/fa";

export default class PalleteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, colors: [] };
  }
  async getAPalete() {
    this.setState({ loading: true }, async () => {
      const response = await fetch("/api/get_colors");
      const colors = await response.json();
      [
        { cssName: "--one" },
        { cssName: "--two" },
        { cssName: "--three" },
        { cssName: "--four" },
        { cssName: "--five" },
      ].forEach(({ cssName }, i) => {
        document.documentElement.style.setProperty(cssName, colors[i]);
      }, colors);
      this.setState({ loading: false, colors });
    });
  }
  componentDidMount() {
    this.getAPalete();
  }
  render() {
    return (
      <div className="pallete-gen box">
        <div className="container has-text-centered">
          <h2 className="title">Pallete Generator</h2>
          <div className="columns is-centered">
            {this.state.colors.map((color, i) => {
              return (
                <button
                  className="button mx-1"
                  style={{ background: color }}
                  key={i + color}
                ></button>
              );
            })}
          </div>
          <button
            className={`button is-large is-primary ${
              this.state.loading ? "is-loading" : ""
            }`}
            onClick={() => {
              this.getAPalete();
            }}
          >
            <span className="icon">
              <FaDice />
            </span>
            <span>Generate</span>
          </button>
        </div>
      </div>
    );
  }
}
