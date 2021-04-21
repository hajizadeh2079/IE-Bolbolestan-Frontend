import { React, Component } from "react";

class Error404 extends Component {
  render() {
    return <h1>Error404</h1>;
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
  
}

export default Error404;