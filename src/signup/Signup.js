import { React, Component } from "react";
import "./Signup.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

class signup extends Component {
  render() {
    const id = this.getId();
    if (id) return <Redirect to={{ pathname: "/" }} />;
    return (
      <div className="my-container signup-container container-cover">
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
              type="text"
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

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    // Todo
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default signup;
