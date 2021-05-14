import { React, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";

class Course extends Component {
  render() {
    const course = this.props.course;
    return (
      <tbody>
        <tr>
          <td>
            <button className="special-buttons" onClick={this.removeCourse}>
              <i className="flaticon-trash-bin"></i>
            </button>
          </td>
          <td>{this.renderStatus(this.props.status)}</td>
          <td>{course.code + "-" + course.classCode}</td>
          <td>{course.name}</td>
          <td>{course.instructor}</td>
          <td>
            <span className="unit">{course.units}</span>
          </td>
        </tr>
      </tbody>
    );
  }

  renderStatus = (status) => {
    if (status === "registered")
      return (
        <span className="register-status registered borders">ثبت شده</span>
      );
    else if (status === "not-registered")
      return (
        <span className="register-status not-registered borders">
          ثبت نهایی نشده
        </span>
      );
    else
      return <span className="register-status waiting borders">در انتظار</span>;
  };

  removeCourse = async () => {
    const course = this.props.course;
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Token: this.getToken(),
      },
      body: JSON.stringify({
        code: course.code,
        classCode: course.classCode,
      }),
    };
    const apiUrl = `http://localhost:8080/plans`;
    const response = await fetch(apiUrl, requestOptions);
    if (response.status == 200) {
      toast.success("حذف با موفقيت انجام شد.");
      this.props.pickedCoursesTrigger();
    } else {
      localStorage.clear();
      toast.error("نیاز به ورود مجدد!");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    }
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(Course);
