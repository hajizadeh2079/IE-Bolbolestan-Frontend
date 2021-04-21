import { React, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../common/all.css";
import "../common/reset.css";
import Login from "../login/Login";
import ProtectedRoute from "./ProtectedRoute.js";
import Home from "../home/Home";
import Courses from "../courses/Courses";
import Schedule from "../schedule/Schedule";
import Error404 from "../common/Error404";
import Signup from "../signup/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" exact>
              <Login setId={this.setId} />
            </Route>
            <Route path="/signup" exact>
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
      </div>
    );
  }

  setId = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
    this.setState({ id: id });
  };
}

export default App;
