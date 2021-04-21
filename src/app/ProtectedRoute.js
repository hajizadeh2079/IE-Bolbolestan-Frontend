import { React, Component } from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    const id = this.getId();

    return id ? <Component /> : <Redirect to={{ pathname: "/login" }} />;
  }
  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default ProtectedRoute;
