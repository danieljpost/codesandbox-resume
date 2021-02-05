import React from "react";
import { render } from "react-dom";
import Resume from "./resume/resume";
import Configurator from "./configurator/configurator";

import "./styles.scss";

const configuratorElement = document.getElementById("configurator");
const resumeElement = document.getElementById("resume");
// TODO: set jobTier according to path parameter i.e. use "route"
const configDefaults = {
  darkmode: true,
  verbosity: 7,
  layout: "A",
  skillsMinPriority: 3,
  skillsMinExpertise: 5,
  jobTier: "Front End",
  showRecommendations: true
};

let configState = configDefaults;

render(<Configurator config={configState} />, configuratorElement);
render(
  <div className="loading">Loading Resume source data...</div>,
  resumeElement
);
// // obtain data from canonical source
// let route = React.route;
console.log(React.route);
let kvetch = fetch("https://danieljpost.pro/resume.json");
kvetch
  .then((response) => response.json())
  .then((data) => {
    render(<Resume config={configState} myData={data} />, resumeElement);
  });
