import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: "",
      results: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ resultData: e.target.value });
  }
  handleClick() {
    this.setState({ results: [...this.state.results, this.state.resultData] });
  }
  render() {
    const theResults = this.state.results;
    const listItems = theResults.map((result, index) => (
      <li key={index}>{result}</li>
    ));

    return (
      <div>
        <input onChange={this.handleChange} />
        <input type="button" value="Add Result" onClick={this.handleClick} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}
