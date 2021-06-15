import React from "react";
import PalleteGenerator from "../lib/components/PalleteGenerator";
import Snapper from "../lib/components/Snapper";
import Student from "../lib/Student";

export default class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: -1 };
    this.students = [];
    this.changeIndex = this.changeIndex.bind(this);
  }
  async getStudents() {
    const response = await fetch("/api/get_students");
    this.students = await response.json();
    this.setState({ index: 0 });
  }
  componentDidMount() {
    this.getStudents();
  }
  changeIndex(n) {
    const changeTo = this.state.index + n;
    this.setState({
      index:
        changeTo < 0
          ? 0
          : changeTo > this.students.length - 1
          ? this.students.length
          : changeTo,
    });
  }
  render() {
    return (
      <div className="container-fluid has-background-dark p-4">
        <div className="columns is-centered is-vcentered  min-100vh">
          <div className="column is-4">
            <main className="container has-text-centered py-3 force-center">
              <div className="card rounded">
                {this.state.index != -1 && (
                  <Student details={this.students[this.state.index]} />
                )}
              </div>
            </main>
          </div>
          <div className="column is-3">
            <PalleteGenerator />
            <Snapper
              changeIndex={this.changeIndex}
              displayLeft={this.state.index === 0}
              displayRight={this.state.index < this.students.length - 1}
              status={`Photo ${this.state.index + 1} of ${
                this.students.length
              }`}
            />
          </div>
        </div>
      </div>
    );
  }
}
