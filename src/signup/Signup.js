import { React, Component } from "react";
import "./Signup.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      secondName: "",
      id: "",
      field: "",
      birthDate: "",
      faculty: "",
      level: "",
      status: "مشغول به تحصیل",
      img: "http://138.197.181.131:5200/img/art.jpg",
    };
  }
  render() {
    const id = this.getId();
    if (id) return <Redirect to={{ pathname: "/" }} />;
    return (
      <div className="my-container signup-container container-cover">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="signup-card borders">
          <img src={logo} alt="" className="signup-form-logo" />
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="name"
              type="text"
              id="inputName"
              placeholder="نام"
              required
              autoFocus
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="secondName"
              type="text"
              id="inputSecondName"
              placeholder="نام خانوادگی"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="email"
              type="email"
              id="inputEmail"
              placeholder="آدرس ایمیل"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="inputPassword"
              placeholder="رمز عبور"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="id"
              type="text"
              id="inputId"
              placeholder="شماره دانشجویی"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="birthDate"
              type="text"
              id="inputBirthDate"
              placeholder="تاریخ تولد"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="field"
              type="text"
              id="inputField"
              placeholder="رشته"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="faculty"
              type="text"
              id="inputFaculty"
              placeholder="دانشکده"
              required
            />
            <input
              className="borders signup-form-input"
              onChange={this.handleInputChange}
              name="level"
              type="text"
              id="inputLevel"
              placeholder="مقطع"
              required
            />
            <button className="borders signup-button" type="submit">
              ثبت نام
            </button>
            <span className="has-account">
              آیا قبلا ثبت نام کرده اید؟ <a href="/login">ورود</a>
            </span>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        secondName: this.state.secondName,
        id: this.state.id,
        field: this.state.field,
        birthDate: this.state.birthDate,
        faculty: this.state.faculty,
        level: this.state.level,
        status: this.state.status,
        img: this.state.img,
      }),
    };
    const apiUrl = `http://localhost:8080/students`;
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
    if (json.success) {
      //this.props.setId(this.state.email);
    } else toast.error("ایمیل یا شماره دانشجویی تکراری است!");
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default signup;
