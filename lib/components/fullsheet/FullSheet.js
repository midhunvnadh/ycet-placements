import React from "react";
import Accredition from "../Accredition";
import Footer from "../Footer";
import Logo from "../Logo";
import BodySmall from "./Body";

export default class FullSheet extends React.Component {
  render() {
    return (
      <article className="full-sheet" id="card">
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
        <BodySmall />
        <Footer />
        <span className="attribution">Redsoc.io</span>
      </article>
    );
  }
}
