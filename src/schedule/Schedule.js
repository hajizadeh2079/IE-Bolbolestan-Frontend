import { React, Component } from "react";
import Header from "../common/Header";
import ScheduleRow from "./ScheduleRow";
import Footer from "../common/Footer";
import RingLoader from "react-spinners/RingLoader";
import "./Schedule.css";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      term: 0,
      loading: true,
    };
  }
  render() {
    const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (this.state.loading)
      return (
        <div>
          <Header
            page1="خانه"
            page1URL="/"
            page2="انتخاب واحد"
            page2URL="/courses"
          />
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
          <div className="schedule-container">
            <div className="schedule-header">
              <div>
                <i className="flaticon-calendar"></i>
                <span>برنامه هفتگی</span>
              </div>
            </div>
            <div className="spinner-loading-schedule">
              <RingLoader size={150} />
            </div>
          </div>
          <Footer />
        </div>
      );
    return (
      <div>
        <Header
          page1="خانه"
          page1URL="/"
          page2="انتخاب واحد"
          page2URL="/courses"
        />
        <div className="schedule-container">
          <div className="schedule-header">
            <div>
              <i className="flaticon-calendar"></i>
              <span>برنامه هفتگی</span>
            </div>
            <span>ترم {this.state.term}</span>
          </div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>شنبه</td>
                <td>یک‌شنبه</td>
                <td>دوشنبه</td>
                <td>سه‌شنبه</td>
                <td>چهارشنبه</td>
                <td>پنج‌شنبه</td>
              </tr>
            </tbody>
            {hours.map((hour, index) => (
              <ScheduleRow
                key={index}
                start={hour}
                courses={this.renderCourses(hour)}
              />
            ))}
          </table>
        </div>
        <Footer />
      </div>
    );
  }

  async componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: this.getToken(),
      },
    };
    const apiUrl = `http://87.247.185.122:32643/plans/finalized`;
    const response = await fetch(apiUrl, requestOptions);
    if (response.status == 200) {
      const json = await response.json();
      setTimeout(() => {
        this.setState({
          courses: json.lastFinalizedCourses,
          term: json.term,
          loading: false,
        });
      }, 2000);
    } else {
      localStorage.clear();
      toast.error("نیاز به ورود مجدد!");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    }
  }

  renderCourses = (start) => {
    let courses = [];
    for (let i = 0; i < this.state.courses.length; i++) {
      let [hours, minutes, seconds] =
        this.state.courses[i].classTimeStart.split(":");
      hours = parseInt(hours, 10);
      if (hours == start) courses.push(this.state.courses[i]);
    }
    return courses;
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(Schedule);
