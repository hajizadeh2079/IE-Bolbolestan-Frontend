import { React, Component } from "react";
import Header from "../common/Header";
import AllCourses from "./AllCourses";
import Footer from "../common/Footer";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="courses-container">
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
