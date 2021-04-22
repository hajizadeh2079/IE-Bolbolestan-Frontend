import { React, Component } from "react";

class Home extends Component {
  render() {
    return <h1>Home</h1>;
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Home;
