import { React, Component } from "react";
import RingLoader from "react-spinners/RingLoader";
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
    const apiUrl = `http://localhost:8080/reports/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        cards: json,
        loading: false,
      });
    }, 2000);
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Report;
