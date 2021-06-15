import React from "react";
import PalleteGenerator from "../lib/components/PalleteGenerator";
import Snapper from "../lib/components/Snapper";
import Student from "../lib/Student";

export default class Students extends React.Component {
  render() {
    return (
      <div className="container-fluid has-background-dark min-100vh">
        <div className="columns is-centered is-vcentered">
          <div className="column is-7">
            <main className="container has-text-centered py-3 force-center">
              <div className="card rounded">
                <Student />
              </div>
            </main>
          </div>
          <div className="column is-3">
            <PalleteGenerator />
            <Snapper />
          </div>
        </div>
      </div>
    );
  }
}
