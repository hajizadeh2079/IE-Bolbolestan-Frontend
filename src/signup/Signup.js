import { React, Component } from "react";

class Signup extends Component {
  render() {
    return <h1>Signup</h1>;
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Signup;
