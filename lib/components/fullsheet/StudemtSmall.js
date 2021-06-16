import React from "react";

export default class StudentSmall extends React.Component {
  componentDidMount() {
    console.log(this.props.details);
  }
  render() {
    return (
      <div className="column is-2">
        <div className="photo-holder-sm">
          <div className="photo">
            <img src={this.props.details["student_photo_path"]} />
          </div>
          <label className="has-text-weight-bold student-name">
            {this.props.details["student_name"]}
          </label>
          <div className="comp-logo-path">
            <img src={this.props.details["company_logo_path"]} />
          </div>
        </div>
      </div>
    );
  }
}
