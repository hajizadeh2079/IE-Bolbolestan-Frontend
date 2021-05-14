import { React, Component } from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    const token = this.getToken();
    return token ? <Component /> : <Redirect to={{ pathname: "/login" }} />;
  }
  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default ProtectedRoute;
