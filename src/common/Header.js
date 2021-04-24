import logo from "../common/photos/logo.png";
import { React, Component } from "react";
import Logout from "./Logout";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delTask: false,
    };
  }
  render() {
    return (
      <div className="header fixed-top">
        <ul className="nav">
          <li className="nav-item col-md-1">
            <a href="/">
              <img src={logo} alt="" className="bird-logo" />
            </a>
          </li>
          <li className="nav-item col-md-1">
            <a href="/">خانه</a>
          </li>
          <li className="nav-item col-md-2">
            <a href="/schedule">برنامه هفتگی</a>
          </li>
          <li className="nav-item col-md-6"></li>
          <li className="nav-item col-md-2">
            <a className="exit" onClick={this.handleConfirmationBox}>
              <span>خروج</span>
              <i className="flaticon-log-out"></i>
            </a>
          </li>
          <li>
            <Logout
              handleConfirmationBox={this.handleConfirmationBox}
            />
          </li>
        </ul>
      </div>
    );
  }

  handleConfirmationBox = () => {
    if (!this.state.delTask) {
      document.querySelector(".container-logout").style.display = "flex";
      document.querySelector("*").style.filter = "brightness(50%)";
      document.querySelector("body").style.background = "rgba(0,0,0,0.5)";
    } else {
      document.querySelector(".container-logout").style.display = "none";
      document.querySelector("*").style.filter = "none";
      document.querySelector("body").style.background = "none";
    }
    this.setState({
      delTask: !this.state.delTask,
    });
  };
}

export default Header;