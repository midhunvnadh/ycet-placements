import React from "react";
import Photo from "./Photo";

export default class Body extends React.Component {
  render() {
    return (
      <div className="container body has-text-centered">
        <div className="py-2">
          <div className="">
            <div className="congrats awes py-3">
              <div className="awes">Congratulations to</div>
            </div>
            <div className="columns body-apprec">
              <div className="column is-6 left">
                <div className="container">
                  <Photo />
                </div>
              </div>
              <div className="column is-6 right">
                <div className="container">
                  <div className="for-spi">
                    <p className="awes">for successful</p>
                    <p className="awes">placement in</p>
                  </div>
                  <div className="company-logo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
