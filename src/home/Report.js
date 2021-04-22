import { React, Component } from "react";
import Card from "./Card";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  render() {
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
    this.setState({
      cards: json,
    });
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Report;
