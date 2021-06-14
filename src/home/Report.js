import { React, Component } from "react";
import RingLoader from "react-spinners/RingLoader";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import Card from "./Card";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: true,
    };
  }
  render() {
    if (this.state.loading)
      return (
        <div className="col-md-8">
          <div className="all-report-cards spinner-loading-home">
            <RingLoader size={150} />
          </div>
        </div>
      );
    return (
      <div className="col-md-8">
        <div className="all-report-cards">
          {this.state.cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: this.getToken(),
      },
    };
    const apiUrl = `http://87.247.185.122:32643/reports`;
    const response = await fetch(apiUrl, requestOptions);
    if (response.status == 200) {
      const json = await response.json();
      setTimeout(() => {
        this.setState({
          cards: json,
          loading: false,
        });
      }, 2000);
    } else {
      localStorage.clear();
      toast.error("نیاز به ورود مجدد!");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    }
  }

  getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
}

export default withRouter(Report);
