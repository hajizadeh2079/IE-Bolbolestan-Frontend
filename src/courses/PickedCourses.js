import { React, Component } from "react";
import PickedCourse from "./PickedCourse";
import RingLoader from "react-spinners/RingLoader";
import { ToastContainer, toast } from "react-toastify";

class PickedCourses extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading)
      return (
        <div className="picked-courses borders">
          <div className="label-courses borders">
            <span>دروس انتخاب شده</span>
          </div>
          <div className="spinner-loading-courses">
            <RingLoader size={150} />
          </div>
        </div>
      );
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
            {this.props.finalizedCourses.map((course) => (
              <PickedCourse
                key={course.code}
                course={course}
                status="registered"
                allCoursesTrigger={this.props.allCoursesTrigger}
                pickedCoursesTrigger={this.props.pickedCoursesTrigger}
              />
            ))}
            {this.props.nonFinalizedCourses.map((course) => (
              <PickedCourse
                key={course.code}
                course={course}
                status="not-registered"
                allCoursesTrigger={this.props.allCoursesTrigger}
                pickedCoursesTrigger={this.props.pickedCoursesTrigger}
              />
            ))}
            {this.props.waitingCourses.map((course) => (
              <PickedCourse
                key={course.code}
                course={course}
                status="waiting"
                allCoursesTrigger={this.props.allCoursesTrigger}
                pickedCoursesTrigger={this.props.pickedCoursesTrigger}
              />
            ))}
          </table>
        </div>
        <div className="picked-courses-status">
          <div className="num-of-units">
            <span>تعداد واحد ثبت شده: {this.props.sumOfUnits}</span>
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

  resetPlan = async () => {
    toast.success("بازگردانی برنامه با موفقيت انجام شد.");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const apiUrl = `http://localhost:8080/plans/reset/${this.getId()}`;
    await fetch(apiUrl, requestOptions);
    this.props.pickedCoursesTrigger();
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
    if (json.success) {
      toast.success("ثبت نهایی دروس با موفقيت انجام شد.");
      this.props.pickedCoursesTrigger();
      this.props.allCoursesTrigger();
    } else toast.error(json.message);
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default PickedCourses;
