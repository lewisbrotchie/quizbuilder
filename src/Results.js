import React, { Component } from "react";

const resultList = [];

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ resultData: e.target.value });
  }
  handleClick() {
    resultList.push(this.state.resultData);
  }
  render() {
    const listItems = resultList.map(result => <li {...result} />);
    return (
      <div>
        <input onChange={this.handleChange} />
        <input type="button" value="Add Result" onClick={this.handleClick} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}
