import Axios from "axios";
import React from "react";
import { render } from "react-dom";
import Resume from "./resume/resume";
import Configurator from "./configurator/configurator";

import "./styles.scss";

const configuratorElement = document.getElementById("configurator");
const resumeElement = document.getElementById("resume");
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
// obtain data from canonical source
Promise.all([Axios.get("https://danieljpost.pro/resume.json")]).then((resp) => {
  render(<Resume config={configState} myData={resp[0].data} />, resumeElement);
});
