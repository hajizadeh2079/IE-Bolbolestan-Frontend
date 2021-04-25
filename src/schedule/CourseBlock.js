import { React, Component } from "react";
class CourseBlock extends Component {
  render() {
    const course = this.props.course;
    return (
      <div
        className={`course-block ${this.renderCSS(course.type)}`}
        style={{ top: this.renderTop(), bottom: this.renderBottom() }}
      >
        <span>
          {this.renderTime(course.classTimeEnd) +
            " - " +
            this.renderTime(course.classTimeStart)}
        </span>
        <span className="class-name">{course.name}</span>
        <span className="class-type">{this.renderType(course.type)}</span>
      </div>
    );
  }

  renderType = (type) => {
    if (type === "Asli") return "اصلی";
    else if (type === "Paaye") return "پایه";
    else if (type === "Umumi") return "عمومی";
    else return "تخصصی";
  };

  renderCSS = (type) => {
    if (type === "Asli") return "asli-schedule";
    else if (type === "Paaye") return "paaye-schedule";
    else if (type === "Umumi") return "umumi-schedule";
    else return "takhasosi-schedule";
  };

  renderTime = (time) => {
    let [hours, minutes, seconds] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (minutes == 0) minutes = "00";
    return `${hours}:${minutes}`;
  };

  renderTop = () => {
    let [hours, minutes, seconds] = this.props.course.classTimeStart.split(":");
    minutes = parseInt(minutes, 10);
    return `${(minutes * 100) / 60 + 2}%`;
  };

  renderBottom = () => {
    let [hours, minutes, seconds] = this.props.course.classTimeStart.split(":");
    const offset = (parseInt(minutes, 10) * 100) / 60;
    const start = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    [hours, minutes, seconds] = this.props.course.classTimeEnd.split(":");
    const end = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    return `-${((end - start) * 100) / 60 - 100 + offset - 2}%`;
  };
}

export default CourseBlock;
