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
  constructor(props) {
    super(props);
    this.state = {
      allCourses: [],
      allLoading: true,
      finalizedCourses: [],
      nonFinalizedCourses: [],
      waitingCourses: [],
      sumOfUnits: 0,
      pickedLoading: true,
    };
  }
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
          <PickedCourses
            finalizedCourses={this.state.finalizedCourses}
            nonFinalizedCourses={this.state.nonFinalizedCourses}
            waitingCourses={this.state.waitingCourses}
            sumOfUnits={this.state.sumOfUnits}
            loading={this.state.pickedLoading}
            allCoursesTrigger={this.allCoursesTrigger}
            pickedCoursesTrigger={this.pickedCoursesTrigger}
          />
          <SearchBox
            allCoursesTrigger={this.allCoursesTrigger}
            pickedCoursesTrigger={this.pickedCoursesTrigger}
          />
          <AllCourses
            courses={this.state.allCourses}
            loading={this.state.allLoading}
            allCoursesTrigger={this.allCoursesTrigger}
            pickedCoursesTrigger={this.pickedCoursesTrigger}
          />
        </div>
        <Footer />
      </div>
    );
  }

  async componentDidMount() {
    let searchFilter = JSON.parse(localStorage.getItem("searchFilter"));
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (searchFilter == null) searchFilter = "";
    if (typeFilter == null) typeFilter = "all";
    const apiUrl = `http://localhost:8080/courses?search=${searchFilter}&type=${typeFilter}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        allCourses: json,
        allLoading: false,
      });
    }, 2000);
    const apiUrl2 = `http://localhost:8080/plans/${this.getId()}`;
    const response2 = await fetch(apiUrl2);
    const json2 = await response2.json();
    setTimeout(() => {
      this.setState({
        finalizedCourses: json2.finalizedCourses,
        nonFinalizedCourses: json2.nonFinalizedCourses,
        waitingCourses: json2.waitingCourses,
        sumOfUnits: json2.sumOfUnits,
        pickedLoading: false,
      });
    }, 2000);
  }

  pickedCoursesTrigger = async () => {
    const apiUrl = `http://localhost:8080/plans/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    this.setState({
      finalizedCourses: json.finalizedCourses,
      nonFinalizedCourses: json.nonFinalizedCourses,
      waitingCourses: json.waitingCourses,
      sumOfUnits: json.sumOfUnits,
    });
  };

  allCoursesTrigger = async () => {
    let searchFilter = JSON.parse(localStorage.getItem("searchFilter"));
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (searchFilter == null) searchFilter = "";
    if (typeFilter == null) typeFilter = "all";
    const apiUrl = `http://localhost:8080/courses?search=${searchFilter}&type=${typeFilter}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    this.setState({
      allCourses: json,
    });
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Courses;
