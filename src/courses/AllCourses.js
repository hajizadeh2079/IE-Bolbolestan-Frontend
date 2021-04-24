import { React, Component } from "react";
import Course from "./Course";
import RingLoader from "react-spinners/RingLoader";

class AllCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      loading: true,
    };
  }
  render() {
    if (this.state.loading)
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
            checked={this.handleChecked("all")}
            onClick={this.handleClick}
          />
          <label className="borders" for="all">
            همه
          </label>
          <input
            type="radio"
            id="Takhasosi"
            value="Takhasosi"
            name="typeFilter"
            checked={this.handleChecked("Takhasosi")}
            onClick={this.handleClick}
          />
          <label className="borders" for="Takhasosi">
            اختصاصی
          </label>
          <input
            type="radio"
            id="Asli"
            value="Asli"
            name="typeFilter"
            checked={this.handleChecked("Asli")}
            onClick={this.handleClick}
          />
          <label className="borders" for="Asli">
            اصلی
          </label>
          <input
            type="radio"
            id="Paaye"
            value="Paaye"
            name="typeFilter"
            checked={this.handleChecked("Paaye")}
            onClick={this.handleClick}
          />
          <label className="borders" for="Paaye">
            پایه
          </label>
          <input
            type="radio"
            id="Umumi"
            value="Umumi"
            name="typeFilter"
            checked={this.handleChecked("Umumi")}
            onClick={this.handleClick}
          />
          <label className="borders" for="Umumi">
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
                <th>توضیحات</th>
              </tr>
            </tbody>
            {this.state.courses.map((course, index) => (
              <Course key={index} course={course} />
            ))}
          </table>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let searchFilter = JSON.parse(localStorage.getItem("searchFilter"));
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (searchFilter == null) searchFilter = "";
    if (typeFilter == null) typeFilter = "all";
    const apiUrl = `http://localhost:8080/courses?search=${searchFilter}&type=${typeFilter}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        courses: json,
        loading: false,
      });
    }, 2000);
  }

  async componentWillUpdate() {
    let searchFilter = JSON.parse(localStorage.getItem("searchFilter"));
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (searchFilter == null) searchFilter = "";
    if (typeFilter == null) typeFilter = "all";
    const apiUrl = `http://localhost:8080/courses?search=${searchFilter}&type=${typeFilter}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        courses: json,
      });
    }, 1000);
  }

  handleChecked = (type) => {
    let typeFilter = JSON.parse(localStorage.getItem("typeFilter"));
    if (type == typeFilter) return "checked";
    if (type == "all" && typeFilter == null) return "checked";
    return "";
  };
  handleClick = (event) => {
    localStorage.setItem("typeFilter", JSON.stringify(event.target.value));
  };
  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default AllCourses;
