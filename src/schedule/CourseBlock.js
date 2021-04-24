import { React, Component } from "react";
class CourseBlock extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    const course = this.props.course;
    return (
      <div class="course-block">
        <span>{course.classTimeEnd + "-" + course.classTimeStart}</span>
        <span class="class-name">{course.name}</span>
        <span class="class-type">{course.type}</span>
      </div>
    );
  }

  componentDidMount() {
      console.log(this.props.course)
  }
}

export default CourseBlock;
