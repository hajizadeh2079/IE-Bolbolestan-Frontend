import { React, Component } from "react";

class Grade extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const grade = this.props.grade;
    return (
      <tbody>
        <tr>
          <td>{this.props.index}</td>
          <td>{grade.code}-01</td>
          <td>{grade.name}</td>
          <td>{grade.units} واحد</td>
          <td>
            <span
              className={
                "borders unit-status-" + this.renderStatusCSS(grade.status)
              }
            >
              {this.renderStatusText(grade.status)}
            </span>
          </td>
          <td>
            <span className={"grade-" + this.renderStatusCSS(grade.status)}>
              {grade.grade}
            </span>
          </td>
        </tr>
      </tbody>
    );
  }

  renderStatusCSS = (status) => {
    if (status === 0) return "failed";
    else if (status === 1) return "pass";
    else return "unknown";
  };

  renderStatusText = (status) => {
    if (status === 0) return "مردود";
    else if (status === 1) return "قبول";
    else return "نامشخص";
  };
}

export default Grade;
