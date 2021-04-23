import { React, Component } from "react";
import PickedCourse from "./PickedCourse";
import RingLoader from "react-spinners/RingLoader";

class PickedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalizedCourses: [],
      nonFinalizedCourses: [],
      waitingCourses: [],
      sumOfUnits: 0,
      loading: false,
    };
  }
  render() {
    return (
      <div class="picked-courses borders">
        <div class="label borders">
          <span>دروس انتخاب شده</span>
        </div>
        <div class="picked-courses-table">
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>وضعیت</th>
                <th>کد</th>
                <th>نام درس</th>
                <th>استاد</th>
                <th>واحد</th>
              </tr>
            </tbody>
            {this.state.finalizedCourses.map((course) => (
              <PickedCourse key={course.code} course={course} status="registered" />
            ))}
            {this.state.nonFinalizedCourses.map((course) => (
              <PickedCourse key={course.code} course={course} status="not-registered"/>
            ))}
            {this.state.waitingCourses.map((course) => (
              <PickedCourse key={course.code} course={course} status="waiting"/>
            ))}
          </table>
        </div>
        <div class="picked-courses-status">
          <div class="num-of-units">
            <span>تعداد واحد ثبت شده: {this.state.sumOfUnits}</span>
          </div>
          <div class="finalized-reset">
            <button class="special-buttons">
              <i class="flaticon-refresh-arrow refresh"></i>
            </button>
            <button>ثبت نهایی</button>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const apiUrl = `http://localhost:8080/courses/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
    setTimeout(() => {
      this.setState({
        finalizedCourses: json.finalizedCourses,
        nonFinalizedCourses: json.nonFinalizedCourses,
        waitingCourses: json.waitingCourses,
        sumOfUnits: json.sumOfUnits,
      });
    }, 2000);
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default PickedCourses;
