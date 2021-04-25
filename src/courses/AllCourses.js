import { React, Component } from "react";
import Course from "./Course";
import RingLoader from "react-spinners/RingLoader";

class AllCourses extends Component {
  render() {
    if (this.props.loading)
      return (
        <div className="all-courses borders">
          <div className="label-courses borders">
            <span>دروس ارائه شده</span>
          </div>
          <div className="spinner-loading-courses">
            <RingLoader size={150} />
          </div>
        </div>
      );
    return (
      <div className="all-courses borders">
        <div className="label-courses borders">
          <span>دروس ارائه شده</span>
        </div>
        <div className="kind-courses">
          <input
            type="radio"
            id="all"
            value="all"
            name="typeFilter"
            defaultChecked={this.handleChecked("all")}
            onClick={this.handleClick}
          />
          <label className="borders" htmlFor="all">
            همه
          </label>
          <input
            type="radio"
            id="Takhasosi"
            value="Takhasosi"
            name="typeFilter"
            defaultChecked={this.handleChecked("Takhasosi")}
            onClick={this.handleClick}
          />
          <label className="borders" htmlFor="Takhasosi">
            اختصاصی
          </label>
          <input
            type="radio"
            id="Asli"
            value="Asli"
            name="typeFilter"
            defaultChecked={this.handleChecked("Asli")}
            onClick={this.handleClick}
          />
          <label className="borders" htmlFor="Asli">
            اصلی
          </label>
          <input
            type="radio"
            id="Paaye"
            value="Paaye"
            name="typeFilter"
            defaultChecked={this.handleChecked("Paaye")}
            onClick={this.handleClick}
          />
          <label className="borders" htmlFor="Paaye">
            پایه
          </label>
          <input
            type="radio"
            id="Umumi"
            value="Umumi"
            name="typeFilter"
            defaultChecked={this.handleChecked("Umumi")}
            onClick={this.handleClick}
          />
          <label className="borders" htmlFor="Umumi">
            عمومی
          </label>
        </div>
        <div className="all-courses-table">
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>کد</th>
                <th>ظرفیت</th>
                <th>نوع</th>
                <th>نام درس</th>
                <th>استاد</th>
                <th>واحد</th>
              </tr>
            </tbody>
            {this.props.courses.map((course, index) => (
              <Course
                key={index}
                course={course}
                index={index}
                allCoursesTrigger={this.props.allCoursesTrigger}
                pickedCoursesTrigger={this.props.pickedCoursesTrigger}
              />
            ))}
          </table>
          <span className="all-courses-details">
            <strong>توضیحات</strong>
          </span>
        </div>
      </div>
    );
  }

  handleChecked = (type) => {
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (type == typeFilter) return "checked";
    if (type == "all" && typeFilter == null) return "checked";
    return "";
  };

  handleClick = (event) => {
    localStorage.setItem("typeFilter", JSON.stringify(event.target.value));
    this.props.allCoursesTrigger();
  };
}

export default AllCourses;
