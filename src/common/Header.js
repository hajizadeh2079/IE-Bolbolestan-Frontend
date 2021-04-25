import logo from "../common/photos/logo.png";
import { React, Component } from "react";
import Logout from "./Logout";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutShow: false,
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
            <a href={this.props.page1URL}>{this.props.page1}</a>
          </li>
          <li className="nav-item col-md-2">
            <a href={this.props.page2URL}>{this.props.page2}</a>
          </li>
          <li className="nav-item col-md-6"></li>
          <li className="nav-item col-md-2">
            <a className="exit" onClick={this.showConfirmationBox}>
              <span>خروج</span>
              <i className="flaticon-log-out"></i>
            </a>
          </li>
          <li>
            <Logout
              hideConfirmationBox={this.hideConfirmationBox}
              show={this.state.logoutShow}
            />
          </li>
        </ul>
      </div>
    );
  }

  hideConfirmationBox = () => {
    this.setState({
      logoutShow: false,
    });
  };

  showConfirmationBox = () => {
    this.setState({
      logoutShow: true,
    });
  };
}

export default Header;
