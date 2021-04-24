import { React, Component } from "react";
import ReactDOM from "react-dom";
import CourseBlock from "./CourseBlock";

class ScheduleRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const days = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ];
    return (
      <tbody>
        <tr>
          <td>{`${this.props.start + 1}:00 - ${this.props.start}:00`}</td>
          {days.map((day, index) => (
            <td key={index}>{this.renderCourse(day)}</td>
          ))}
        </tr>
      </tbody>
    );
  }

  renderCourse = (day) => {
    for (let i = 0; i < this.props.courses.length; i++)
      for (let j = 0; j < this.props.courses[i].classTimeDays.length; j++)
        if (day == this.props.courses[i].classTimeDays[j])
            return <CourseBlock course={this.props.courses[i]} />
  };
}

export default ScheduleRow;
