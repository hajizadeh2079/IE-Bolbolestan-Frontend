import { React, Component } from "react";
import "./Signup.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

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
    const token = this.getToken();
    if (token) return <Redirect to={{ pathname: "/" }} />;
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
              placeholder="تاریخ تولد YYYY/MM/DD"
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

  checkInputFormat = () => {
    const state = this.state;
    if (!validator.isAlpha(validator.blacklist(state.name, " "), "fa-IR"))
      return "فرمت نام نادرست است!";
    if (!validator.isAlpha(validator.blacklist(state.secondName, " "), "fa-IR"))
      return "فرمت نام خانوادگی نادرست است!";
    if (!validator.isEmail(state.email)) return "فرمت ایمیل نادرست است!";
    if (
      !validator.isStrongPassword(state.password, {
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    )
      return "رمز عبور باید حداقل شامل 8 کاراکتر باشد!";
    if (!(validator.isNumeric(state.id) && state.id.length == 9))
      return "فرمت شماره دانشجویی نادرست است!";
    if (!validator.isDate(state.birthDate))
      return "فرمت تاریخ تولد نادرست است!";
    if (!validator.isAlpha(validator.blacklist(state.field, " "), "fa-IR"))
      return "فرمت رشته نادرست است!";
    if (!validator.isAlpha(validator.blacklist(state.faculty, " "), "fa-IR"))
      return "فرمت دانشکده نادرست است!";
    if (!validator.isAlpha(validator.blacklist(state.level, " "), "fa-IR"))
      return "فرمت مقطع نادرست است!";
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessage = this.checkInputFormat();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }
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
    const apiUrl = `http://localhost:8080/students/signup`;
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
    if (json.success) {
      toast.success("ثبت نام با موفقیت انجام شد.");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    } else toast.error("ایمیل یا شماره دانشجویی تکراری است!");
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(signup);
