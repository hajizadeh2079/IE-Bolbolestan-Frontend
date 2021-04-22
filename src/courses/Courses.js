import { React, Component } from "react";

class Courses extends Component {
  render() {
    return <h1>Courses</h1>;
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Courses;
