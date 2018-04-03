import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: "",
      results: []
    };
    //Don't need with "() => this.function()" in render
    //this.handleClick = this.handleClick.bind(this);
    //this.removeResult = this.removeResult.bind(this);

    //Still need this
    //Apparently creates a copy of the event handler for every instance (Not good)
    //TODO: Refactor into own component?
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ resultData: e.target.value });
  }
  handleClick = () => {
    //CORRECT: arrow function to use prevState ->
    this.setState(prevState => ({
      results: [...prevState.results, prevState.resultData]
    }));

    //WRONG: this.state used in setState ->
    //this.setState({ results: [...this.state.results, this.state.resultData] });
  };
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
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>Example Result</Tab>
            {this.state.results.map((result, index) => (
              <Tab key={index} /*onClick={() => this.removeResult(index)}*/>
                {result}
              </Tab>
            ))}
          </TabList>
          <TabPanel>Example description...</TabPanel>
          {this.state.results.map((result, index) => (
            <TabPanel key={index}>
              <input
                type="button"
                value="Remove this result"
                onClick={() => this.removeResult(index)}
              />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}
