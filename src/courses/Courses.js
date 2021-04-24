import { React, Component } from "react";
import Header from "../common/Header";
import AllCourses from "./AllCourses";
import SearchBox from "./SearchBox";
import PickedCourses from "./PickedCourses";
import Footer from "../common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="courses-container">
          <PickedCourses />
          <SearchBox />
          <AllCourses />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Courses;
