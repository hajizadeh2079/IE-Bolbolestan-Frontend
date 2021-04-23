import { React, Component } from "react";

class Course extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const course = this.props.course;
    return (
      <tbody>
        <tr>
          <td>
            <button class="special-buttons" onClick={this.removeCourse}>
              <i class="flaticon-trash-bin"></i>
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
      return <span class="register-status registered borders">ثبت شده</span>;
    else if (status === "not-registered")
      return (
        <span class="register-status not-registered borders">
          ثبت نهایی نشده
        </span>
      );
    else return <span class="register-status waiting borders">در انتظار</span>;
  };

  removeCourse = async () => {
    const course = this.props.course;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.getId(),
        code: course.code,
        classCode: course.classCode,
      }),
    };
    const apiUrl = "http://localhost:8080/courses";
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
    console.log(json);
  };
  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Course;
