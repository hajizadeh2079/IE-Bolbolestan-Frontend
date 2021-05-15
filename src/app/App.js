import { React, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../common/ResetCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/Fonts/Farsi-Digits/font-face-FD.css";
import "../common/mycollection/font/flaticon.css";
import "../common/AllCSS.css";
import Login from "../login/Login";
import ProtectedRoute from "./ProtectedRoute.js";
import Home from "../home/Home";
import Courses from "../courses/Courses";
import Schedule from "../schedule/Schedule";
import Error404 from "../common/Error404";
import Signup from "../signup/Signup";
import ForgetPassword from "../password/ForgetPassword";
//import ResetPassword from "../password/ResetPassword";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login setToken={this.setToken} />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/password/forget" exact>
            <ForgetPassword />
          </Route>
          <Route path="/password/reset">
            <Signup />
          </Route>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/courses" exact component={Courses} />
          <ProtectedRoute path="/schedule" exact component={Schedule} />
          <Route path="/">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    );
  }

  setToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    this.setState({ token: token });
  };
}

export default App;
