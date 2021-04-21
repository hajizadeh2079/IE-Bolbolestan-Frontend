import { React, Component } from "react";
import "./Login.css";
import logo from "../photos/logo.png"

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="card borders">
          <img src={logo} alt="" className="form-logo"/>
          <form className="login-form">
            <input className="borders form-input"
              type="text"
              id="inputEmail"
              placeholder="آدرس ایمیل"
              required
              autoFocus
            />
            <input className="borders form-input"
              type="password"
              id="inputPassword"
              placeholder="رمز عبور"
            />
            <button className="borders login-button"
              type="submit"
            >
              ورود
            </button>
            <span className="no-account">آیا حساب کاربری ندارید؟ <a href="">عضویت</a></span>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;