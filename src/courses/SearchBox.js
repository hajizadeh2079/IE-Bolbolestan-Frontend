import { React, Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: "",
    };
  }
  render() {
    return (
      <div className="search borders">
        <input className="borders" placeholder="نام درس" onChange={this.handleInputChange} value={this.getSearchFilter()}/>
        <button onClick={this.handleClick}>
          جستجو
          <i className="flaticon-loupe search-icon"></i>
        </button>
      </div>
    );
  }
  handleInputChange = (event) => {
    this.setState({ searchFilter: event.target.value });
  };
  handleClick = () => {
    localStorage.setItem("searchFilter", JSON.stringify(this.state.searchFilter));
  };
  getSearchFilter = () => {
    return JSON.parse(localStorage.getItem("searchFilter"));
  };
}

export default SearchBox;