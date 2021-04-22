import { React, Component } from "react";
import Header from "../common/Header";
import Cover from "./Cover";
import Profile from "./Profile";
import Report from "./Report";
import Footer from "../common/Footer";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cover />
        <div className="my-container">
          <Profile />
          <Report />
        </div>
        <Footer />
      </div>
    );
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Home;
