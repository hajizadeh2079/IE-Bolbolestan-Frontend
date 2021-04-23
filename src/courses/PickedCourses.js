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
      <div className="picked-courses borders">
        <div className="label-courses borders">
          <span>دروس انتخاب شده</span>
        </div>
        <div className="picked-courses-table">
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
              <PickedCourse
                key={course.code}
                course={course}
                status="registered"
                trigger={this.trigger}
              />
            ))}
            {this.state.nonFinalizedCourses.map((course) => (
              <PickedCourse
                key={course.code}
                course={course}
                status="not-registered"
                trigger={this.trigger}
              />
            ))}
            {this.state.waitingCourses.map((course) => (
              <PickedCourse
                key={course.code}
                course={course}
                status="waiting"
                trigger={this.trigger}
              />
            ))}
          </table>
        </div>
        <div className="picked-courses-status">
          <div className="num-of-units">
            <span>تعداد واحد ثبت شده: {this.state.sumOfUnits}</span>
          </div>
          <div className="finalized-reset">
            <button className="special-buttons" onClick={this.resetPlan}>
              <i className="flaticon-refresh-arrow refresh"></i>
            </button>
            <button onClick={this.submitPlan}>ثبت نهایی</button>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const apiUrl = `http://localhost:8080/plans/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        finalizedCourses: json.finalizedCourses,
        nonFinalizedCourses: json.nonFinalizedCourses,
        waitingCourses: json.waitingCourses,
        sumOfUnits: json.sumOfUnits,
      });
    }, 2000);
  }

  async componentWillUpdate() {
    const apiUrl = `http://localhost:8080/plans/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    this.setState({
      finalizedCourses: json.finalizedCourses,
      nonFinalizedCourses: json.nonFinalizedCourses,
      waitingCourses: json.waitingCourses,
      sumOfUnits: json.sumOfUnits,
    });
  }

  resetPlan = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const apiUrl = `http://localhost:8080/plans/reset/${this.getId()}`;
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
  };

  submitPlan = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.getId(),
      }),
    };
    const apiUrl = `http://localhost:8080/plans/submit/${this.getId()}`;
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default PickedCourses;
