import React from "react";
import Accredition from "./components/Accredition";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

export default class Student extends React.Component {
  render() {
    return (
      <article className="" id="card">
        <div className="container-fluid p-3">
          <div className="columns header is-vcentered is-mobile">
            <div className="column is-4 is-4-mobile">
              <Accredition />
            </div>
            <div className="column is-8 is-8-mobile">
              <Logo />
            </div>
          </div>
        </div>
        <div className="student-card-heading">
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </div>
        <Body details={this.props.details} />
        <Footer />
        <span className="attribution">Redsoc.io</span>
      </article>
    );
  }
}
