import React from "react";
import FullSheet from "../lib/components/fullsheet/FullSheet";
import PalleteGenerator from "../lib/components/PalleteGenerator";
import Snapper from "../lib/components/Snapper";

export default class FullSheetPage extends React.Component {
  render() {
    return (
      <div className="container-fluid has-background-dark p-4">
        <div className="columns is-centered is-vcentered  min-100vh">
          <div className="column is-auto">
            <main className="container has-text-centered py-3 force-center">
              <div className="card rounded" style={{ overflow: "auto" }}>
                <FullSheet />
              </div>
            </main>
          </div>
          <div
            className="column is-auto hover-full-op"
            style={{
              position: "fixed",
              top: "10%",
              right: "5%",
            }}
          >
            <div>
              <PalleteGenerator />
              <Snapper disablePagination={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
