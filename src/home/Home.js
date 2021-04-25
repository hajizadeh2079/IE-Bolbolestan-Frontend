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
        <Header page1="انتخاب واحد" page1URL = "/courses" page2="برنامه هفتگی" page2URL="/schedule"/>
        <Cover />
        <div className="my-container">
          <Profile />
          <Report />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
