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
            <div className="force-center body-apprec">
              <div className="container left">
                <Photo
                  photoURL={this.props.details["student_photo_path"]}
                  name={this.props.details["student_name"]}
                />
              </div>
              <div className="container right">
                <div className="for-spi">
                  <p className="awes">for successful</p>
                  <p className="awes">placement in</p>
                </div>
                <div className="company-logo">
                  <img src={this.props.details["company_logo_path"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
