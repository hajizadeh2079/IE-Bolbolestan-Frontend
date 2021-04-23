import { React, Component } from "react";
import Course from "./Course";
import RingLoader from "react-spinners/RingLoader";

class AllCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      search: "",
      loading: false,
    };
  }
  render() {
    return (
      <div className="all-courses borders">
        <div className="label borders">
          <span>دروس ارائه شده</span>
        </div>
        <div className="kind-courses">
          <input type="checkbox" id="all" value="all" />
          <label className="borders" for="all">
            همه
          </label>
          <input type="checkbox" id="Takhasosi" value="Takhasosi" />
          <label className="borders" for="Takhasosi">
            اختصاصی
          </label>
          <input type="checkbox" id="Asli" value="Asli" />
          <label className="borders" for="Asli">
            اصلی
          </label>
          <input type="checkbox" id="Paaye" value="Paaye" />
          <label className="borders" for="Paaye">
            پایه
          </label>
          <input type="checkbox" id="Umumi" value="Umumi" />
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
    const apiUrl = `http://localhost:8080/courses?search=${this.state.search}&type=`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
    setTimeout(() => {
      this.setState({
        courses: json,
        loading: false,
      });
    }, 2000);
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default AllCourses;
