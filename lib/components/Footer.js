import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-card">
        <div className="container">
          <div className="coffred is-vcentered force-center">
            <div className="p-3">
              <p className="has-text-weight-bold footer-cf-title">
                Courses offered
              </p>
            </div>
            <div className="">
              <div className="field has-addons">
                {["CE", "ME", "EEE", "ECE", "CSE"].map((a, i) => {
                  return (
                    <p className="control" key={i + a}>
                      <button className="button is-small">
                        <span className="has-text-weight-bold">{a}</span>
                      </button>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="contact ">
            <FaPhoneAlt /> 9895133041, 9495700456, 0474-2724305
          </div>
        </div>
      </div>
    );
  }
}
