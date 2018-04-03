import React, { Component } from "react";

import "react-tabs/style/react-tabs.css";
import Results from "./Results";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Create a Quiz</h1>
        <h3>Instructions:</h3>
        <ul>
          <li>Create some results (recommended - at least 1)</li>
          <li>Create some questions with answers for each result</li>
          <li>Build quiz and enjoy :)</li>
        </ul>
        <input type="button" value="Build Quiz" />
        <hr />
        <Results />
        <hr />
      </div>
    );
  }
}
