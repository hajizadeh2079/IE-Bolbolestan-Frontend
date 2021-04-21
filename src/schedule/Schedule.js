import { React, Component } from "react";

class Schedule extends Component {
  render() {
    return <h1>Schedule</h1>;
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
  
}

export default Schedule;
