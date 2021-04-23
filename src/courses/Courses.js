import { React, Component } from "react";
import Header from "../common/Header";
import AllCourses from "./AllCourses";
import SearchBox from "./SearchBox";
import PickedCourses from "./PickedCourses";
import Footer from "../common/Footer";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="courses-container">
          <PickedCourses />
          <SearchBox />
          <AllCourses />
        </div>
        <Footer />
      </div>
    );
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Courses;
