import { React, Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Home;
