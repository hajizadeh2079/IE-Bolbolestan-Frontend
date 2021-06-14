import { React, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { withRouter } from "react-router-dom";

class Course extends Component {
  render() {
    const course = this.props.course;
    return (
      <tbody>
        <OverlayTrigger
          id={this.props.index}
          placement="left"
          overlay={
            <Popover id="popover-basic">
              <Popover.Content>{this.renderTooltip()}</Popover.Content>
            </Popover>
          }
        >
          <tr>
            <td>
              <button className="special-buttons" onClick={this.addCourse}>
                <i
                  className={
                    "all-courses-icons flaticon-" +
                    this.renderIcon(course.signedUp, course.capacity)
                  }
                ></i>
              </button>
            </td>
            <td>{course.code + "-" + course.classCode}</td>
            <td>
              <span
                className={this.renderCapacityCSS(
                  course.signedUp,
                  course.capacity
                )}
              >
                {course.signedUp + "/" + course.capacity}
              </span>
            </td>
            <td>{this.renderType(course.type)}</td>
            <td>{course.name}</td>
            <td>{course.instructor}</td>
            <td>
              <span className="unit">{course.units}</span>
            </td>
          </tr>
        </OverlayTrigger>
      </tbody>
    );
  }

  renderType = (type) => {
    if (type === "Asli") return <span className="kind-class asli">اصلی</span>;
    else if (type === "Paaye")
      return <span className="kind-class paaye">پایه</span>;
    else if (type === "Umumi")
      return <span className="kind-class umumi">عمومی</span>;
    else return <span className="kind-class takhasosi">تخصصی</span>;
  };

  renderCapacityCSS = (signedUp, capacity) => {
    if (capacity > signedUp) return "empty-capacity";
  };

  renderIcon = (signedUp, capacity) => {
    if (capacity > signedUp) return "add";
    else return "clock-circular-outline";
  };

  addCourse = async () => {
    const course = this.props.course;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: this.getToken(),
      },
      body: JSON.stringify({
        code: course.code,
        classCode: course.classCode,
      }),
    };
    const apiUrl = `http://87.247.185.122:32643/plans`;
    const response = await fetch(apiUrl, requestOptions);
    if (response.status == 200) {
      const json = await response.json();
      if (json.success) {
        toast.success("درس با موفقيت اضافه شد.");
        this.props.pickedCoursesTrigger();
      } else toast.error(json.message);
    } else {
      localStorage.clear();
      toast.error("نیاز به ورود مجدد!");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    }
  };

  renderTooltip = () => {
    const course = this.props.course;
    let time = "";
    let day = [];
    let preq = "";
    let exam = "";
    let [hours, minutes, seconds] = course.classTimeEnd.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (minutes == 0) minutes = "00";
    time = hours + ":" + minutes + " - ";
    [hours, minutes, seconds] = course.classTimeStart.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (minutes == 0) minutes = "00";
    time += hours + ":" + minutes;
    preq = course.prerequisitesNamesArray.join("، ");
    const days = {
      ["Saturday"]: "شنبه",
      ["Sunday"]: "یک‌شنبه",
      ["Monday"]: "دوشنبه",
      ["Tuesday"]: "سه‌شنبه",
      ["Wednesday"]: "چهارشنبه",
      ["Thursday"]: "پنج‌شنبه",
    };
    for (let i = 0; i < course.classTimeDays.length; i++)
      day.push(days[course.classTimeDays[i]]);
    day = day.join(" - ");
    const examStart = new Date(Date.parse(course.examTimeStart));
    const examEnd = new Date(Date.parse(course.examTimeEnd));
    exam = examStart.getMonth() + "/" + examStart.getDay() + " - ";
    exam +=
      examEnd.getHours() +
      ":" +
      (examEnd.getMinutes() == 0 ? "00" : examEnd.getMinutes()) +
      " - ";
    exam +=
      examStart.getHours() +
      ":" +
      (examStart.getMinutes() == 0 ? "00" : examStart.getMinutes());
    return (
      <div style={{ width: "12vw" }}>
        <p>{time}</p>
        <p>{day}</p>
        <hr style={{ backgroundColor: "#000000", height: "1px" }} />
        {preq.length > 0 && (
          <div>
            <p>
              <strong>پیش‌نیازی‌ها</strong>
            </p>
            <p>{preq}</p>
          </div>
        )}
        <p>
          <strong>امتحان</strong>
        </p>
        <p>{exam}</p>
      </div>
    );
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default Course;
