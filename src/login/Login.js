import { React, Component } from "react";
import "./Login.css";
import logo from "../common/photos/logo.png";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const id = this.getId();
    if (id) return <Redirect to={{ pathname: "/" }} />;
    return (
      <div className="my-container login-container container-cover">
        <div className="card borders">
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
          <img src={logo} alt="" className="form-logo" />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="borders form-input"
              onChange={this.handleInputChange}
              name="email"
              type="text"
              id="inputEmail"
              placeholder="آدرس ایمیل"
              required
              autoFocus
            />
            <input
              className="borders form-input"
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="inputPassword"
              placeholder="رمز عبور"
            />
            <button className="borders login-button" type="submit">
              ورود
            </button>
            <span className="no-account">
              آیا حساب کاربری ندارید؟ <a href="/signup">عضویت</a>
            </span>
          </form>
        </div>
      </div>
    );
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = `http://localhost:8080/students/${this.state.email}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    if (json.id) {
      this.props.setId(this.state.email);
    } else toast.error("شماره دانشجويی نامعتبر!");
  };

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Login;
