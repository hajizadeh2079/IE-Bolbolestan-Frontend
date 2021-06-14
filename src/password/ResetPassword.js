import { React, Component } from "react";
import "./ResetPassword.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

class resetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }
  render() {
    const token = this.getToken();
    if (token) return <Redirect to={{ pathname: "/" }} />;
    return (
      <div className="my-container resetPassword-container container-cover">
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
        <div className="resetPassword-card borders">
          <img src={logo} alt="" className="resetPassword-form-logo" />
          <form className="resetPassword-form" onSubmit={this.handleSubmit}>
            <input
              className="borders resetPassword-form-input"
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="inputPassword"
              placeholder="رمز عبور جدید"
              required
            />
            <button className="borders resetPassword-button" type="submit">
              تغییر رمز عبور
            </button>
            <span className="has-account">
              بازگشت به صفحه <a href="/login">ورود</a>
            </span>
          </form>
        </div>
      </div>
    );
  }

  checkInputFormat = () => {
    const state = this.state;
    if (
      !validator.isStrongPassword(state.password, {
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    )
      return "رمز عبور باید حداقل شامل 8 کاراکتر باشد!";
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
      headers: {
        "Content-Type": "application/json",
        Token: window.location.pathname.split("/")[3],
      },
      body: JSON.stringify({
        password: this.state.password,
      }),
    };
    const apiUrl = `http://87.247.185.122:32643/students/password/reset`;
    const response = await fetch(apiUrl, requestOptions);
    if (response.status == 200) {
      toast.success("رمز عبور با موفقیت تغییر یافت.");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    } else {
      toast.error("عملیات تغییر رمز عبور با مشکل مواجه شد!");
      setTimeout(() => {
        this.props.history.push("/password/forget");
      }, 3000);
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(resetPassword);
