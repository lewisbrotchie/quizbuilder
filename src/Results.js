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
    this.removeResult = this.removeResult.bind(this);
  }

  handleChange(e) {
    this.setState({ resultData: e.target.value });
  }
  handleClick() {
    //CORRECT: arrow function to use prevState ->
    this.setState(prevState => ({
      results: [...prevState.results, prevState.resultData]
    }));

    //WRONG: this.state used in setState->
    //this.setState({ results: [...this.state.results, this.state.resultData] });
  }
  removeResult(i) {
    this.setState(prevState => ({
      results: [
        ...prevState.results.slice(0, i),
        ...prevState.results.slice(i + 1)
      ]
    }));
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <input type="button" value="Add Result" onClick={this.handleClick} />
        <br />
        (Click to remove)
        <ul>
          {this.state.results.map((result, index) => (
            <li key={index} onClick={() => this.removeResult(index)}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
