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
            <button className="special-buttons">
              <i className={"all-courses-icons flaticon-" + this.renderIcon(course.signedUp, course.capacity)}></i>
            </button>
          </td>
          <td>{course.code + "-" + course.classCode}</td>
          <td>
            <span className={this.renderCapacityCSS(course.signedUp, course.capacity)}>
              {course.signedUp + "/" + course.capacity}
            </span>
          </td>
          <td>{this.renderType(course.type)}</td>
          <td>{course.name}</td>
          <td>{course.instructor}</td>
          <td>
            <span className="unit">{course.units}</span>
          </td>
          <td></td>
        </tr>
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
    else return "clock-circular-outline"
  };
}

export default Course;
