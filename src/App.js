import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
          <li>
            Create some questions with answers (remember to link answers to
            results!)
          </li>
          <li>Build quiz and enjoy :)</li>
        </ul>

        <Tabs>
          <TabList>
            <Tab>Results</Tab>
            <Tab>Questions</Tab>
          </TabList>

          <TabPanel>
            <Results />
          </TabPanel>
          <TabPanel>This is question's content</TabPanel>
        </Tabs>
      </div>
    );
  }
}
