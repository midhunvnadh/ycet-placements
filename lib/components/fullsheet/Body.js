import React from "react";
import StudentSmall from "./StudemtSmall";

export default class BodySmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }
  async getStudents() {
    const response = await fetch("/api/get_students");
    this.setState({ students: await response.json() });
  }
  componentDidMount() {
    this.getStudents();
  }
  render() {
    return (
      <div className="body-small px-5">
        <div className="container px-5">
          <div className="py-5">
            <p className="awes title">
              Congratulations to our students for acquiring placements in
              reputed companies
            </p>
          </div>
          <div className="columns" style={{ flexWrap: "wrap" }}>
            {this.state.students.map((student) => {
              return <StudentSmall details={student} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
