import { React, Component } from "react";
import Grade from "./Grade";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="report-card">
        <div className="label borders">
          <span>کارنامه - ترم {this.props.card.term}</span>
        </div>
        <table>
          {this.props.card.gradesHistory.map((grade, index) => (
            <Grade key={index} grade={grade} index={index + 1} />
          ))}
        </table>
        <div className="gpa">
          <span className="borders">معدل: {this.props.card.gpa}</span>
        </div>
      </div>
    );
  }
}

export default Card;