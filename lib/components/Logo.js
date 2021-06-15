import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <div className="force-center">
          <div className="">
            <img src="/images/college_logo.png" height="68" width="68" />
          </div>
          <div className="">
            <div className="container has-text-left">
              <div className="logo-title">
                <h1 className="has-text-weight-bold">YOUNUS COLLEGE</h1>
              </div>
              <div className="logo-subtitle">
                <h1>OF ENGINEERING AND TECHNOLOGY</h1>
              </div>
              <div className="address">
                <p>Pallimukku, Vadakkevila (PO), Kollam-691010, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
