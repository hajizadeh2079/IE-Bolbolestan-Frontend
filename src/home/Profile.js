import { React, Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stdId: "",
      name: "",
      secondName: "",
      birthDate: "",
      field: "",
      faculty: "",
      level: "",
      status: "",
      img: "",
      gpa: "",
      tpu: "",
    };
  }
  render() {
    return (
      <div className="col-md-4 profile">
        <img src={this.state.img} alt="" className="user-photo" />
        <ul>
          <li>
            <span>نام: </span>
            {this.state.name} {this.state.secondName}
          </li>
          <li>
            <span>شماره دانشجویی: </span>
            {this.state.stdId}
          </li>
          <li>
            <span>تاریخ تولد: </span>
            {this.state.birthDate}
          </li>
          <li>
            <span>معدل کل: </span>
            {this.state.gpa}
          </li>
          <li>
            <span>واحد گذرانده: </span>
            {this.state.tpu}
          </li>
          <li>
            <span>دانشکده: </span>
            {this.state.faculty}
          </li>
          <li>
            <span>رشته: </span>
            {this.state.field}
          </li>
          <li>
            <span>مقطع: </span>
            {this.state.level}
          </li>
          <li className="borders studying-status">{this.state.status}</li>
        </ul>
      </div>
    );
  }

  async componentDidMount() {
    const apiUrl = `http://localhost:8080/profiles/${this.getId()}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
    this.setState({
      stdId: json.stdId,
      name: json.name,
      secondName: json.secondName,
      birthDate: json.birthDate,
      field: json.field,
      faculty: json.faculty,
      level: json.level,
      status: json.status,
      img: json.img,
      gpa: json.gpa,
      tpu: json.tpu,
    });
  }

  getId = () => {
    return JSON.parse(localStorage.getItem("id"));
  };
}

export default Profile;
