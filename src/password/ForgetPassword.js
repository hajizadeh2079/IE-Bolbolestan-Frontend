import { React, Component } from "react";
import "./ForgetPassword.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class forgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  render() {
    const token = this.getToken();
    if (token) return <Redirect to={{ pathname: "/" }} />;
    return (
      <div className="my-container forgetPassword-container container-cover">
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
        <div className="forgetPassword-card borders">
          <img src={logo} alt="" className="forgetPassword-form-logo" />
          <form className="forgetPassword-form" onSubmit={this.handleSubmit}>
            <input
              className="borders forgetPassword-form-input"
              onChange={this.handleInputChange}
              name="email"
              type="email"
              id="inputEmail"
              placeholder="آدرس ایمیل"
              required
            />
            <button className="borders forgetPassword-button" type="submit">
              بازیابی رمز عبور
            </button>
            <span className="has-account">
              بازگشت به صفحه <a href="/login">ورود</a>
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
      }),
    };
    const apiUrl = `http://localhost:8080/students/password/forget`;
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
    if (json.success) {
      toast.success("ایمیل بازیابی رمز عبور ارسال شد.");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    } else toast.error("ایمیل نامعتبر است!");
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(forgetPassword);
